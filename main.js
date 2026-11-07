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

  // Shells and Components: image and text side by side, sides alternate.
  function row(w, i) {
    const side = i % 2 === 0 ? "img-left" : "img-right";
    return (
      '<article class="row ' + side + '">' +
        '<div class="row-img"><img loading="lazy" src="' + esc(w.img) + '" alt="' + esc(w.title) + '"></div>' +
        '<div class="row-text">' + info(w) + "</div>" +
      "</article>"
    );
  }

  // Impossible objects and Out of series: two columns, caption centered under the image.
  function tile(w) {
    return (
      '<article class="tile">' +
        '<img loading="lazy" src="' + esc(w.img) + '" alt="' + esc(w.title) + '">' +
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

})();
