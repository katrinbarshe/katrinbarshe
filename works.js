/*
  All artworks on the site live here.
  To change a price, mark a work as sold, or add a buy link, edit this file only.

  original.status:
    "available" - shows the price and a "Buy original" button
    "sold"      - shows "Sold"
    "inquire"   - no price yet, shows "Ask about this work" (opens an email)
  original.buyUrl: Square payment link for this painting. Leave "" to open an email instead.
  print.url: link to the print in the Printful shop. Leave "" if there is no print yet.
  date: the text shown under the size, exactly as on the old site.
  gallery: optional list of photos shown (with arrows) when the painting is clicked.
           Without it, a click just opens the main image larger.
*/

const IMG = "assets/img/";
const G = "assets/img/gallery/";  // extra photos shown when a painting is clicked

// Prices: (width + height in inches) x $20 for paintings on canvas board,
// x $12 for watercolors on paper; Impossible objects are an entry price.

const WORKS = [
  // ---------- Shells ----------
  { series: "shells", title: "Shell #13", size: "48\"x30\", Canvas Board, Acrylic", date: "January 2025", img: IMG + "shell-13.jpg",
    original: { status: "available", price: "$1,600", buyUrl: "https://square.link/u/gYisIzdt" }, print: { url: "" } },
  { series: "shells", title: "Shell #12", size: "48\"x30\", Canvas Board, Acrylic", date: "December 2024", img: IMG + "shell-12.jpg",
    original: { status: "available", price: "$1,600", buyUrl: "https://square.link/u/aWwoPTjT" }, print: { url: "" } },
  { series: "shells", title: "Shell #10", size: "48\"x30\", Canvas Board, Acrylic", date: "March 2024", img: IMG + "shell-10.jpg",
    original: { status: "available", price: "$1,600", buyUrl: "https://square.link/u/2oJT8fPG" }, print: { url: "" } },
  { series: "shells", title: "Shell #9", size: "48\"x30\", Canvas Board, Acrylic", date: "February 2024", img: IMG + "shell-9.jpg",
    original: { status: "available", price: "$1,600", buyUrl: "https://square.link/u/W93OH04N" }, print: { url: "" } },
  { series: "shells", title: "Shell #8. Angel", size: "48\"x30\", Canvas Board, Acrylic", date: "December 2023", img: IMG + "shell-8.jpg",
    original: { status: "available", price: "$1,600", buyUrl: "https://square.link/u/lRjy4vNY" }, print: { url: "" } },
  { series: "shells", title: "Shell #7", size: "48\"x30\", Canvas Board, Acrylic", date: "December 2023", img: IMG + "shell-7.jpg",
    original: { status: "available", price: "$1,600", buyUrl: "https://square.link/u/NFxMN0wt" }, print: { url: "" } },

  // ---------- Components ----------
  { series: "components", title: "LED", size: "9\"x12\", Paper, Watercolor", date: "2024", img: IMG + "led.jpg",
    original: { status: "available", price: "$250", buyUrl: "https://square.link/u/4sa7e81K" },
    print: { url: "https://katrinbarshe.printful.me/product/rgb-led-framed-poster-67d6ff147eb91" } },
  { series: "components", title: "Resistor", size: "9\"x12\", Paper, Watercolor", date: "2024", img: IMG + "resistor.jpg",
    original: { status: "available", price: "$250", buyUrl: "https://square.link/u/MQieKmev" },
    print: { url: "https://katrinbarshe.printful.me/product/resistor-framed-photo-paper-poster" } },
  { series: "components", title: "Capacitor", size: "9\"x12\", Paper, Watercolor", date: "2024", img: IMG + "capacitor.jpg",
    original: { status: "available", price: "$250", buyUrl: "https://square.link/u/mnhAo3ao" },
    print: { url: "https://katrinbarshe.printful.me/product/capacitor-framed-poster-67d70257920ec" } },

  // ---------- Impossible objects ----------
  { series: "impossible", title: "IO #1. Penrose Triangle", size: "6\"x6\", Canvas Board, Acrylic", date: "2023", img: IMG + "io-1.jpg",
    gallery: [IMG + "io-1.jpg", G + "io-1-1.jpg", G + "io-1-2.jpg", G + "io-1-3.jpg"],
    original: { status: "available", price: "$150", buyUrl: "https://square.link/u/lIkfpPXD" }, print: { url: "" } },
  { series: "impossible", title: "IO #2. Penrose Triangle", size: "6\"x6\", Canvas Board, Acrylic", date: "2023", img: IMG + "io-2.jpg",
    gallery: [IMG + "io-2.jpg", G + "io-2-1.jpg", G + "io-2-2.jpg", G + "io-2-3.jpg"],
    original: { status: "available", price: "$150", buyUrl: "https://square.link/u/yzrnuUOZ" }, print: { url: "" } },
  { series: "impossible", title: "IO #3. Penrose Triangle", size: "6\"x6\", Canvas Board, Acrylic", date: "2023", img: IMG + "io-3.jpg",
    gallery: [IMG + "io-3.jpg", G + "io-3-1.jpg", G + "io-3-2.jpg", G + "io-3-3.jpg"],
    original: { status: "available", price: "$150", buyUrl: "https://square.link/u/pGbr3cCM" }, print: { url: "" } },
  { series: "impossible", title: "IO #4. Arrows", size: "6\"x6\", Canvas Board, Acrylic", date: "2023", img: IMG + "io-4.jpg",
    gallery: [IMG + "io-4.jpg", G + "io-4-1.jpg", G + "io-4-2.jpg", G + "io-4-3.jpg"],
    original: { status: "available", price: "$150", buyUrl: "https://square.link/u/BFWb4IzH" }, print: { url: "" } },

  // ---------- Out of series ----------
  { series: "other", title: "1130 Sunny Point Dr", size: "18\"x18\", Canvas Board, Acrylic/Oil", date: "2024", img: IMG + "sunny-point.jpg",
    original: { status: "available", price: "$720", buyUrl: "https://square.link/u/EV2wDGtE" }, print: { url: "" } },
  { series: "other", title: "Under Pineda Cswy Bridge", size: "18\"x18\", Canvas Board, Acrylic/Oil", date: "November 2024", img: IMG + "pineda-bridge.jpg",
    original: { status: "available", price: "$720", buyUrl: "https://square.link/u/eEYAmWm0" }, print: { url: "" } },
  { series: "other", title: "Brevard County", size: "48\"x30\", Canvas Board, Acrylic", date: "2024", img: IMG + "brevard-county.jpg",
    gallery: [G + "brevard-county-1.jpg", G + "brevard-county-2.jpg", G + "brevard-county-3.jpg", G + "brevard-county-4.jpg", G + "brevard-county-5.jpg"],
    original: { status: "available", price: "$1,600", buyUrl: "https://square.link/u/C7sdSsbN" }, print: { url: "" } },
  { series: "other", title: "The Shell", size: "18\"x18\", Canvas Board, Texture Paste/Acrylic", date: "2024", img: IMG + "the-shell.jpg",
    original: { status: "available", price: "$720", buyUrl: "https://square.link/u/8K3Lxwgl" }, print: { url: "" } },
  { series: "other", title: "The Heels", size: "18\"x24\", Canvas Board, Acrylic/Oil", date: "2024", img: IMG + "the-heels.jpg",
    gallery: [G + "the-heels-1.jpg", G + "the-heels-2.jpg", G + "the-heels-3.jpg"],
    original: { status: "available", price: "$780", buyUrl: "https://square.link/u/0IDRuLFX" }, print: { url: "" } },
];
