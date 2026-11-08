// Builds the artwork blocks from works.js and runs the top slider.
// You normally do not need to edit this file.
(function () {
  const EMAIL = "katrinbarshe@gmail.com";

  function esc(s) {
    return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  function mail(title, what) {
    return "mailto:" + EMAIL + "?subject=" + encodeURIComponent(what + ": " + title);
  }

  function info(w) {
    const o = w.original || {};
    const p = w.print || {};
    let price = "";
    let buttons = "";

    if (o.status === "sold") price = '<p class="work-price">Original sold</p>';
    if (o.status === "available" && o.price) {
      price = '<p class="work-price">Original ' + esc(o.price) + "</p>";
      buttons += '<a class="pill" href="' + esc(o.buyUrl || mail(w.title, "Buy original")) + '"' + (o.buyUrl ? ' target="_blank" rel="noopener"' : '') + '>Buy original</a>';
    }
    if (p.url) buttons = '<a class="pill" href="' + esc(p.url) + '" target="_blank" rel="noopener">Buy print</a>' + buttons;
    if (!buttons) buttons = '<a class="pill" href="' + esc(mail(w.title, "About the painting")) + '">Ask about this work</a>';

    return (
      '<h3 class="work-title">' + esc(w.title) + "</h3>" +
      '<p class="work-meta">' + esc(w.size) + "<br>" + esc(w.date) + "</p>" +
      price +
      '<p class="work-actions">' + buttons + "</p>"
    );
  }

  // Clickable painting image; a small badge shows how many photos the gallery has.
  function pic(w) {
    const n = (w.gallery || []).length;
    return (
      '<button type="button" class="pic" data-work="' + WORKS.indexOf(w) + '" aria-label="View ' + esc(w.title) + (n > 1 ? " (" + n + " photos)" : "") + '">' +
        '<img loading="lazy" src="' + esc(w.img) + '" alt="' + esc(w.title) + '">' +
        (n > 1 ? '<span class="pic-count" aria-hidden="true">1 / ' + n + "</span>" : "") +
      "</button>"
    );
  }

  // Shells and Components: image and text side by side, sides alternate.
  function row(w, i) {
    const side = i % 2 === 0 ? "img-left" : "img-right";
    return (
      '<article class="row ' + side + '">' +
        '<div class="row-img">' + pic(w) + '</div>' +
        '<div class="row-text">' + info(w) + "</div>" +
      "</article>"
    );
  }

  // Impossible objects and Out of series: two columns, caption centered under the image.
  function tile(w) {
    return (
      '<article class="tile">' +
        pic(w) +
        '<div class="tile-text">' + info(w) + "</div>" +
      "</article>"
    );
  }

  document.querySelectorAll("[data-series]").forEach(el => {
    const s = el.getAttribute("data-series");
    const list = WORKS.filter(w => w.series === s);
    el.innerHTML = list.map(el.dataset.layout === "rows" ? row : tile).join("");
  });

  // Top slider
  const slider = document.querySelector(".slider");
  if (slider) {
    const slides = slider.querySelectorAll(".slide-img");
    let i = 0;
    const show = n => {
      slides[i].classList.remove("is-on");
      i = (n + slides.length) % slides.length;
      slides[i].classList.add("is-on");
    };
    slider.querySelector(".prev").addEventListener("click", () => show(i - 1));
    slider.querySelector(".next").addEventListener("click", () => show(i + 1));
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInterval(() => show(i + 1), 6000);
    }
  }

  // Lightbox: click a painting to see it larger and leaf through its photos.
  const box = document.createElement("div");
  box.className = "lightbox";
  box.hidden = true;
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.innerHTML =
    '<button type="button" class="lb-close" aria-label="Close">&times;</button>' +
    '<button type="button" class="lb-prev" aria-label="Previous photo">&#8249;</button>' +
    '<figure class="lb-fig"><img class="lb-img" alt=""><figcaption class="lb-cap"></figcaption></figure>' +
    '<button type="button" class="lb-next" aria-label="Next photo">&#8250;</button>';
  document.body.appendChild(box);
  const lbImg = box.querySelector(".lb-img");
  const lbCap = box.querySelector(".lb-cap");
  let pics = [], at = 0, title = "", lastFocus = null;

  function draw() {
    lbImg.src = pics[at];
    lbImg.alt = title + (pics.length > 1 ? ", photo " + (at + 1) + " of " + pics.length : "");
    lbCap.textContent = title + (pics.length > 1 ? "   " + (at + 1) + " / " + pics.length : "");
    box.classList.toggle("single", pics.length < 2);
    if (pics.length > 1) new Image().src = pics[(at + 1) % pics.length];
  }
  function go(d) { at = (at + d + pics.length) % pics.length; draw(); }
  function open(w) {
    pics = (w.gallery && w.gallery.length) ? w.gallery : [w.img];
    at = 0; title = w.title; lastFocus = document.activeElement;
    draw(); box.hidden = false; document.body.classList.add("lb-open");
    box.querySelector(".lb-close").focus();
  }
  function close() {
    box.hidden = true; document.body.classList.remove("lb-open");
    if (lastFocus) lastFocus.focus();
  }

  document.addEventListener("click", e => {
    const b = e.target.closest(".pic");
    if (b) open(WORKS[+b.dataset.work]);
  });
  box.querySelector(".lb-close").addEventListener("click", close);
  box.querySelector(".lb-prev").addEventListener("click", () => go(-1));
  box.querySelector(".lb-next").addEventListener("click", () => go(1));
  box.addEventListener("click", e => { if (e.target === box || e.target.classList.contains("lb-fig")) close(); });
  document.addEventListener("keydown", e => {
    if (box.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") go(-1);
    else if (e.key === "ArrowRight") go(1);
  });
  let x0 = null;
  box.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
  box.addEventListener("touchend", e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 40 && pics.length > 1) go(dx < 0 ? 1 : -1);
  });

})();
