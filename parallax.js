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
    items.push({ el, layer });
  });

  // Top slider: the photos slide down slower than the page as you scroll.
  // A softer speed here keeps the photo framing close to the original.
  const SLIDER_SPEED = 0.25;
  const slider = document.querySelector(".slider");
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
  if (!items.length) return;

  // Make each layer tall enough that its edges never show while it moves.
  function size() {
    const vh = window.innerHeight;
    items.forEach(({ el, layer, custom, size }) => {
      if (custom) { size(); return; }
      const h = el.offsetHeight;
      const extra = Math.ceil((vh / 2 + h / 2) * SPEED) + 2;
      layer.style.top = -extra + "px";
      layer.style.height = h + extra * 2 + "px";
    });
  }

  let ticking = false;
  function update() {
    const vh = window.innerHeight;
    items.forEach(({ el, layer, custom, move }) => {
      if (custom) { move(); return; }
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
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
