/*
  All artworks on the site live here.
  To change a price, mark a work as sold, or add a buy link, edit this file only.

  original.status:
    "available" - shows a "Buy original" link (the price is kept here for reference, not shown)
    "sold"      - shows "Sold"
    "inquire"   - no price yet, shows "Ask about this work" (opens an email)
  original.buyUrl: Square payment link for this painting. Leave "" to open an email instead.
  print.url: link to the print in the Printful shop. Leave "" if there is no print yet.
  print.options: several prints instead of one link, e.g. canvas and framed:
           [{ label: "Canvas print", price: "$195", url: "https://..." }, ...]
  size: one line under the title: technique, then size in inches and centimeters.
  subtitle: optional line under the title, e.g. the exact name of a component.
  date: the text shown under the size.
  series: "shells", "components", "other" (Other works) or "io" (Impossible objects).
  Each work has its own address made from its image name, for example
  katrinbarshe.com/#shell-13 or katrinbarshe.com/out-of-series.html#io-1.
  gallery: optional list of photos shown (with arrows) when the painting is clicked.
           Without it, a click just opens the main image larger.
*/

const IMG = "assets/img/";
const G = "assets/img/gallery/";  // extra photos shown when a painting is clicked

// Prices: (width + height in inches) x $20 for paintings on canvas board,
// x $12 for watercolors on paper; Impossible objects are an entry price.

const WORKS = [
  // ---------- Shells ----------
  { series: "shells", title: "Shell #13", size: "Acrylic on canvas board, 48 × 30 in (122 × 76 cm)", date: "January 2025", img: IMG + "shell-13.jpg",
    gallery: [IMG + "shell-13.jpg", G + "shell-13-1.jpg", G + "shell-13-2.jpg"],
    original: { status: "available", price: "$1,600", buyUrl: "https://square.link/u/gYisIzdt" }, print: { options: [
      { label: "Canvas print", price: "$195", url: "https://katrinbarshe.printful.me/product/shell-13-canvas-print-24x36" },
      { label: "Framed print", price: "$119", url: "https://katrinbarshe.printful.me/product/shell-13-framed-print-16x20" } ] } },
  { series: "shells", title: "Shell #12", size: "Acrylic on canvas board, 48 × 30 in (122 × 76 cm)", date: "December 2024", img: IMG + "shell-12.jpg",
    gallery: [IMG + "shell-12.jpg", G + "shell-12-1.jpg", G + "shell-12-2.jpg"],
    original: { status: "available", price: "$1,600", buyUrl: "https://square.link/u/aWwoPTjT" }, print: { options: [
      { label: "Canvas print", price: "$195", url: "https://katrinbarshe.printful.me/product/shell-12-canvas-print-24x36" },
      { label: "Framed print", price: "$119", url: "https://katrinbarshe.printful.me/product/shell-12-framed-print-16x20" } ] } },
  { series: "shells", title: "Shell #10", size: "Acrylic on canvas board, 48 × 30 in (122 × 76 cm)", date: "March 2024", img: IMG + "shell-10.jpg",
    gallery: [IMG + "shell-10.jpg", G + "shell-10-1.jpg", G + "shell-10-2.jpg"],
    original: { status: "available", price: "$1,600", buyUrl: "https://square.link/u/2oJT8fPG" }, print: { options: [
      { label: "Canvas print", price: "$195", url: "https://katrinbarshe.printful.me/product/shell-10-canvas-print-24x36" },
      { label: "Framed print", price: "$119", url: "https://katrinbarshe.printful.me/product/shell-10-framed-print-16x20" } ] } },
  { series: "shells", title: "Shell #9", size: "Acrylic on canvas board, 48 × 30 in (122 × 76 cm)", date: "February 2024", img: IMG + "shell-9.jpg",
    gallery: [IMG + "shell-9.jpg", G + "shell-9-1.jpg", G + "shell-9-2.jpg"],
    original: { status: "available", price: "$1,600", buyUrl: "https://square.link/u/W93OH04N" }, print: { options: [
      { label: "Canvas print", price: "$195", url: "https://katrinbarshe.printful.me/product/shell-9-canvas-print-24x36" },
      { label: "Framed print", price: "$119", url: "https://katrinbarshe.printful.me/product/shell-9-framed-print-16x20" } ] } },
  { series: "shells", title: "Shell #8. Angel", size: "Acrylic on canvas board, 48 × 30 in (122 × 76 cm)", date: "December 2023", img: IMG + "shell-8.jpg",
    gallery: [IMG + "shell-8.jpg", G + "shell-8-1.jpg", G + "shell-8-2.jpg"],
    original: { status: "available", price: "$1,600", buyUrl: "https://square.link/u/lRjy4vNY" }, print: { options: [
      { label: "Canvas print", price: "$195", url: "https://katrinbarshe.printful.me/product/shell-8-angel-canvas-print-24x36" },
      { label: "Framed print", price: "$119", url: "https://katrinbarshe.printful.me/product/shell-8-angel-framed-print-16x20" } ] } },
  { series: "shells", title: "Shell #7", size: "Acrylic on canvas board, 48 × 30 in (122 × 76 cm)", date: "December 2023", img: IMG + "shell-7.jpg",
    gallery: [IMG + "shell-7.jpg", G + "shell-7-1.jpg", G + "shell-7-2.jpg"],
    original: { status: "available", price: "$1,600", buyUrl: "https://square.link/u/NFxMN0wt" }, print: { options: [
      { label: "Canvas print", price: "$195", url: "https://katrinbarshe.printful.me/product/shell-7-canvas-print-24x36" },
      { label: "Framed print", price: "$119", url: "https://katrinbarshe.printful.me/product/shell-7-framed-print-16x20" } ] } },

  // ---------- Components ----------
  // Connection: size 36 × 36 to be confirmed. Price: (36 + 36) x $20 + frame. No Square link yet, so it shows "Ask about this work".
  { series: "components", title: "Connection", subtitle: "USB-C 3.2 Gen 2 (10 Gbps) Cable", size: "Acrylic on polyester banner fabric, framed, 36 × 36 in (91 × 91 cm)", date: "May 2026", img: IMG + "connection.jpg",
    original: { status: "inquire", price: "$1,600" }, print: { url: "" } },
  { series: "components", title: "LED", size: "Watercolor on paper, 9 × 12 in (23 × 30 cm)", date: "2024", img: IMG + "led.jpg",
    original: { status: "available", price: "$250", buyUrl: "https://square.link/u/4sa7e81K" },
    print: { options: [{ label: "Framed print", price: "$79", url: "https://katrinbarshe.printful.me/product/rgb-led-framed-print-with-mat" }] } },
  { series: "components", title: "Resistor", size: "Watercolor on paper, 9 × 12 in (23 × 30 cm)", date: "2024", img: IMG + "resistor.jpg",
    original: { status: "available", price: "$250", buyUrl: "https://square.link/u/MQieKmev" },
    print: { options: [{ label: "Framed print", price: "$79", url: "https://katrinbarshe.printful.me/product/resistor-framed-print-with-mat" }] } },
  { series: "components", title: "Capacitor", size: "Watercolor on paper, 9 × 12 in (23 × 30 cm)", date: "2024", img: IMG + "capacitor.jpg",
    original: { status: "available", price: "$250", buyUrl: "https://square.link/u/mnhAo3ao" },
    print: { options: [{ label: "Framed print", price: "$79", url: "https://katrinbarshe.printful.me/product/capacitor-framed-print-with-mat" }] } },

  // ---------- Other works (page out-of-series.html) ----------
  { series: "other", title: "1130 Sunny Point Dr", size: "Acrylic and oil on canvas board, 18 × 18 in (46 × 46 cm)", date: "2024", img: IMG + "sunny-point.jpg",
    original: { status: "available", price: "$720", buyUrl: "https://square.link/u/EV2wDGtE" }, print: { options: [
      { label: "Canvas print", price: "$129", url: "https://katrinbarshe.printful.me/product/1130-sunny-point-dr-canvas-print-16x16" },
      { label: "Framed print", price: "$89", url: "https://katrinbarshe.printful.me/product/1130-sunny-point-dr-framed-print-16x16" } ] } },
  { series: "other", title: "Under Pineda Cswy Bridge", size: "Acrylic and oil on canvas board, 18 × 18 in (46 × 46 cm)", date: "November 2024", img: IMG + "pineda-bridge.jpg",
    original: { status: "available", price: "$720", buyUrl: "https://square.link/u/eEYAmWm0" }, print: { options: [{ label: "Canvas print", price: "$129", url: "https://katrinbarshe.printful.me/product/under-pineda-cswy-bridge-canvas-print-16x16" }] } },
  { series: "other", title: "The Shell", size: "Texture paste and acrylic on canvas board, 18 × 18 in (46 × 46 cm)", date: "2024", img: IMG + "the-shell.jpg",
    original: { status: "available", price: "$720", buyUrl: "https://square.link/u/8K3Lxwgl" }, print: { url: "" } },
  { series: "other", title: "The Heels", size: "Acrylic and oil on canvas board, 18 × 24 in (46 × 61 cm)", date: "2024", img: IMG + "the-heels.jpg",
    gallery: [G + "the-heels-1.jpg", G + "the-heels-2.jpg", G + "the-heels-3.jpg"],
    original: { status: "available", price: "$780", buyUrl: "https://square.link/u/0IDRuLFX" }, print: { options: [
      { label: "Canvas print", price: "$149", url: "https://katrinbarshe.printful.me/product/the-heels-canvas-print-18x24" },
      { label: "Framed print", price: "$119", url: "https://katrinbarshe.printful.me/product/the-heels-framed-print-16x20" } ] } },
  { series: "other", title: "Brevard County", size: "Acrylic on canvas board, 48 × 30 in (122 × 76 cm)", date: "2024", img: IMG + "brevard-county.jpg",
    gallery: [G + "brevard-county-1.jpg", G + "brevard-county-2.jpg", G + "brevard-county-3.jpg", G + "brevard-county-4.jpg", G + "brevard-county-5.jpg"],
    original: { status: "available", price: "$1,600", buyUrl: "https://square.link/u/C7sdSsbN" }, print: { options: [{ label: "Canvas print", price: "$195", url: "https://katrinbarshe.printful.me/product/brevard-county-canvas-print-24x36" }] } },

  // ---------- Impossible objects (their own group at the end of Other works) ----------
  { series: "io", title: "IO #1. Penrose Triangle", size: "Acrylic on canvas board, 6 × 6 in (15 × 15 cm)", date: "2023", img: IMG + "io-1.jpg",
    gallery: [IMG + "io-1.jpg", G + "io-1-1.jpg", G + "io-1-2.jpg", G + "io-1-3.jpg"],
    original: { status: "available", price: "$150", buyUrl: "https://square.link/u/lIkfpPXD" }, print: { url: "" } },
  { series: "io", title: "IO #2. Penrose Triangle", size: "Acrylic on canvas board, 6 × 6 in (15 × 15 cm)", date: "2023", img: IMG + "io-2.jpg",
    gallery: [IMG + "io-2.jpg", G + "io-2-1.jpg", G + "io-2-2.jpg", G + "io-2-3.jpg"],
    original: { status: "available", price: "$150", buyUrl: "https://square.link/u/yzrnuUOZ" }, print: { url: "" } },
  { series: "io", title: "IO #3. Penrose Triangle", size: "Acrylic on canvas board, 6 × 6 in (15 × 15 cm)", date: "2023", img: IMG + "io-3.jpg",
    gallery: [IMG + "io-3.jpg", G + "io-3-1.jpg", G + "io-3-2.jpg", G + "io-3-3.jpg"],
    original: { status: "available", price: "$150", buyUrl: "https://square.link/u/pGbr3cCM" }, print: { url: "" } },
  { series: "io", title: "IO #4. Arrows", size: "Acrylic on canvas board, 6 × 6 in (15 × 15 cm)", date: "2023", img: IMG + "io-4.jpg",
    gallery: [IMG + "io-4.jpg", G + "io-4-1.jpg", G + "io-4-2.jpg", G + "io-4-3.jpg"],
    original: { status: "available", price: "$150", buyUrl: "https://square.link/u/BFWb4IzH" }, print: { url: "" } },
];
