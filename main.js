// Builds the artwork blocks from works.js, runs the photo bands with arrows,
// and opens a painting large when it is clicked.
// You normally do not need to edit this file.
(function () {
  const EMAIL = "katrinbarshe@gmail.com";

  function esc(s) {
    return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  function mail(title, what) {
    return "mailto:" + EMAIL + "?subject=" + encodeURIComponent(what + ": " + title);
  }

  // Each work's own address: its image name without the folder and ".jpg" (shell-13, io-1 ...)
  function slug(w) {
    return w.img.split("/").pop().replace(/\.[a-z]+$/i, "");
  }
  function bySlug(s) {
    return WORKS.find(w => slug(w) === s);
  }

  // One buy action: a quiet text link. Prices are not shown on the site;
  // they are on the payment and print shop pages (prices in works.js are kept for reference).
  function action(url, label, price, sameTab) {
    return (
      '<span class="action">' +
        '<a class="text-link" href="' + esc(url) + '"' + (sameTab ? "" : ' target="_blank" rel="noopener"') + ">" + esc(label) + "</a>" +
      "</span>"
    );
  }

  // Lines under the title: technique, size, date. The size never breaks in the middle.
  function meta(w) {
    const cut = w.size.lastIndexOf(", ");
    const lines = cut > 0 ? [w.size.slice(0, cut), w.size.slice(cut + 2)] : [w.size];
    lines.push(w.date);
    return lines.map((x, k) => (k === 1 ? esc(x).replace(/ /g, "&nbsp;") : esc(x))).join("<br>");
  }

  function info(w) {
    const o = w.original || {};
    const p = w.print || {};
    let actions = "";

    if (o.status === "sold") actions += '<span class="action">Original sold</span>';
    if (o.status === "available" && o.price) {
      actions += o.buyUrl
        ? action(o.buyUrl, "Buy original", o.price)
        : action(mail(w.title, "Buy original"), "Buy original", o.price, true);
    }
    if (p.url) actions += action(p.url, "Buy print", p.from);
    if (p.options && p.options.length) actions += p.options.map(x => action(x.url, x.label, x.price)).join("");
    if (!actions) actions = action(mail(w.title, "About the painting"), "Ask about this work", "", true);

    return (
      '<h3 class="work-title">' + esc(w.title) + "</h3>" +
      (w.subtitle ? '<p class="work-subtitle">' + esc(w.subtitle) + "</p>" : "") +
      '<p class="work-meta">' + meta(w) + "</p>" +
      '<p class="work-actions">' + actions + "</p>"
    );
  }

  // Clickable painting image; a small badge shows how many photos the gallery has.
  function pic(w) {
    const n = (w.gallery || []).length;
    return (
      '<button type="button" class="pic" data-open="' + esc(slug(w)) + '" aria-label="View ' + esc(w.title) + (n > 1 ? " (" + n + " photos)" : "") + '">' +
        '<img loading="lazy" src="' + esc(w.img) + '" alt="' + esc(w.title) + '">' +
        (n > 1 ? '<span class="pic-count" aria-hidden="true">1 / ' + n + "</span>" : "") +
      "</button>"
    );
  }

  function tile(w) {
    return (
      '<article class="tile" id="' + esc(slug(w)) + '">' +
        pic(w) +
        '<div class="tile-text">' + info(w) + "</div>" +
      "</article>"
    );
  }

  document.querySelectorAll("[data-series]").forEach(el => {
    const s = el.getAttribute("data-series");
    el.innerHTML = WORKS.filter(w => w.series === s).map(tile).join("");
  });

  // Photo bands with arrows
  document.querySelectorAll(".slider").forEach(slider => {
    const slides = slider.querySelectorAll(".slide-img");
    if (slides.length < 2) return;
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
  });

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
  let pics = [], at = 0, title = "", lastFocus = null, current = null;

  // The address bar follows the open painting, so the link can be copied and shared.
  function setHash(h) {
    try { history.replaceState(null, "", h ? "#" + h : location.pathname + location.search); } catch (e) {}
  }

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
    at = 0; title = w.title; lastFocus = document.activeElement; current = w;
    draw(); box.hidden = false; document.body.classList.add("lb-open");
    box.querySelector(".lb-close").focus();
    setHash(slug(w));
  }
  function close() {
    box.hidden = true; document.body.classList.remove("lb-open");
    setHash("");
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    // After a direct link the page may have moved while photos loaded: return to the painting.
    const t = current && document.getElementById(slug(current));
    if (t && lastFocus === document.body) {
      const r = t.getBoundingClientRect();
      if (r.top < 0 || r.top > window.innerHeight * 0.6) t.scrollIntoView();
    }
  }

  document.addEventListener("click", e => {
    const b = e.target.closest("[data-open]");
    if (!b) return;
    const w = bySlug(b.dataset.open);
    if (w) open(w);
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

  // The cursor as a small lamp over a painting (the light itself is drawn in styles.css).
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.addEventListener("pointermove", e => {
      const b = e.target.closest && e.target.closest(".pic, .glow");
      if (!b) return;
      const r = b.getBoundingClientRect();
      b.style.setProperty("--mx", (e.clientX - r.left) + "px");
      b.style.setProperty("--my", (e.clientY - r.top) + "px");
    }, { passive: true });
  }

  // A link to one painting (for example katrinbarshe.com/#shell-13) scrolls to it and opens it.
  const first = bySlug(decodeURIComponent(location.hash.slice(1)));
  const firstTile = first && document.getElementById(slug(first));
  if (firstTile) {
    firstTile.scrollIntoView();
    open(first);
  }

})();
