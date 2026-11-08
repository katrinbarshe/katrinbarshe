// Parallax for banner sections: the background moves slower than the page,
// like on the old Strikingly site. Any element with class "banner" or "info-banner"
// and an inline background-image gets the effect.
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const SPEED = 0.35; // 0 = no movement, 1 = background stays fixed on screen
  const items = [];

  document.querySelectorAll(".banner, .info-banner").forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    const layer = document.createElement("div");
    layer.className = "parallax-layer";
    layer.style.backgroundImage = bg;
    el.style.backgroundImage = "none";
    el.classList.add("has-parallax");
    el.prepend(layer);
    // data-ratio="width/height of the photo": the photo keeps its full width
    // (nothing cut at the sides) and slides vertically inside a shorter banner.
    const ratio = parseFloat(el.dataset.ratio);
    // data-zoom="1.3": show the photo 30% larger (the sides are trimmed equally)
    const zoom = parseFloat(el.dataset.zoom) || 1;
    items.push({ el, layer, ratio: ratio > 0 ? ratio : 0, zoom });
  });

  // Top slider: the photos slide down slower than the page as you scroll.
  // A softer speed here keeps the photo framing close to the original.
  const SLIDER_SPEED = 0.25;
  const slider = document.querySelector(".slider:not(.fit-slider)");
  if (slider) {
    const imgs = slider.querySelectorAll(".slide-img");
    let start = 0;
    const sizeSlider = () => {
      start = slider.getBoundingClientRect().top + window.scrollY;
      const extra = Math.ceil((slider.offsetHeight + start) * SLIDER_SPEED) + 2;
      imgs.forEach(img => { img.style.top = -extra + "px"; img.style.height = slider.offsetHeight + extra + "px"; });
    };
    const moveSlider = () => {
      const r = slider.getBoundingClientRect();
      if (r.bottom < 0) return;
      const offset = (start - r.top) * SLIDER_SPEED; // = how far the page has scrolled past the start
      imgs.forEach(img => { img.style.transform = "translate3d(0," + offset.toFixed(1) + "px,0)"; });
    };
    items.push({ custom: true, size: sizeSlider, move: moveSlider });
  }
  // Full-width slider (Components, Out of series): each photo keeps its whole width.
  // The slider is 75% as tall as the shortest photo; every photo slides from its top
  // (when the page opens) to its bottom (when the slider leaves the screen).
  const fit = document.querySelector(".fit-slider");
  if (fit) {
    const imgs = Array.from(fit.querySelectorAll(".slide-img"));
    let heights = [], H = 0;
    const sizeFit = () => {
      const W = fit.offsetWidth;
      heights = imgs.map(im => W / (parseFloat(im.dataset.ratio) || 2));
      H = Math.round(Math.min.apply(null, heights) * 0.75);
      fit.style.aspectRatio = "auto";
      fit.style.height = H + "px";
      imgs.forEach((im, k) => { im.style.top = "0px"; im.style.height = Math.ceil(heights[k]) + "px"; im.style.objectFit = "fill"; });
    };
    const moveFit = () => {
      const vh = window.innerHeight;
      const r = fit.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const start = Math.min(r.top + window.scrollY, vh);
      const p = Math.min(1, Math.max(0, (start - r.top) / (start + r.height)));
      imgs.forEach((im, k) => { im.style.transform = "translate3d(0," + (-(heights[k] - H) * p).toFixed(1) + "px,0)"; });
    };
    items.push({ custom: true, size: sizeFit, move: moveFit });
  }
  if (!items.length) return;

  // Make each layer tall enough that its edges never show while it moves.
  function size() {
    const vh = window.innerHeight;
    items.forEach(({ el, layer, custom, size, ratio, zoom }) => {
      if (custom) { size(); return; }
      if (ratio) {
        const imgH = Math.ceil(el.offsetWidth * zoom / ratio);
        layer.style.top = "0px";
        layer.style.right = "auto";
        layer.style.width = (zoom * 100) + "%";
        layer.style.left = (-(zoom - 1) / 2 * 100) + "%";
        if (imgH <= el.offsetHeight) {   // narrow screens: photo would be too short, just fill the box
          layer.style.height = el.offsetHeight + "px";
          layer.style.width = "100%"; layer.style.left = "0";
          layer.style.backgroundSize = "cover";
        } else {
          layer.style.height = imgH + "px";
          layer.style.backgroundSize = "100% 100%";
        }
        return;
      }
      const h = el.offsetHeight;
      const extra = Math.ceil((vh / 2 + h / 2) * SPEED) + 2;
      layer.style.top = -extra + "px";
      layer.style.height = h + extra * 2 + "px";
    });
  }

  let ticking = false;
  function update() {
    const vh = window.innerHeight;
    items.forEach(({ el, layer, custom, move, ratio }) => {
      if (custom) { move(); return; }
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      if (ratio) {
        // 0 = top of the photo visible (where the banner first appears), 1 = bottom of the photo
        // when the banner leaves at the top of the screen
        const range = Math.max(0, layer.offsetHeight - el.offsetHeight);
        const start = Math.min(r.top + window.scrollY, vh);
        const p = Math.min(1, Math.max(0, (start - r.top) / (start + r.height)));
        layer.style.transform = "translate3d(0," + (-range * p).toFixed(1) + "px,0)";
        return;
      }
      // distance of the section center from the screen center
      const offset = (r.top + r.height / 2 - vh / 2) * SPEED;
      layer.style.transform = "translate3d(0," + (-offset).toFixed(1) + "px,0)";
    });
    ticking = false;
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => { size(); onScroll(); });
  size();
  update();
})();
