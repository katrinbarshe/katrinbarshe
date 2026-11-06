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
*/

const IMG = "assets/img/";

const WORKS = [
  // ---------- Shells ----------
  { series: "shells", title: "Shell #13", size: "48\"x30\", Canvas Board, Acrylic", date: "January 2025", img: IMG + "shell-13.jpg",
    original: { status: "inquire", price: "", buyUrl: "" }, print: { url: "" } },
  { series: "shells", title: "Shell #12", size: "48\"x30\", Canvas Board, Acrylic", date: "December 2024", img: IMG + "shell-12.jpg",
    original: { status: "inquire", price: "", buyUrl: "" }, print: { url: "" } },
  { series: "shells", title: "Shell #10", size: "48\"x30\", Canvas Board, Acrylic", date: "March 2024", img: IMG + "shell-10.jpg",
    original: { status: "inquire", price: "", buyUrl: "" }, print: { url: "" } },
  { series: "shells", title: "Shell #9", size: "48\"x30\", Canvas Board, Acrylic", date: "February 2024", img: IMG + "shell-9.jpg",
    original: { status: "inquire", price: "", buyUrl: "" }, print: { url: "" } },
  { series: "shells", title: "Shell #8", size: "48\"x30\", Canvas Board, Acrylic", date: "December 2023", img: IMG + "shell-8.jpg",
    original: { status: "inquire", price: "", buyUrl: "" }, print: { url: "" } },
  { series: "shells", title: "Shell #7", size: "48\"x30\", Canvas Board, Acrylic", date: "December 2023", img: IMG + "shell-7.jpg",
    original: { status: "inquire", price: "", buyUrl: "" }, print: { url: "" } },

  // ---------- Components ----------
  { series: "components", title: "LED", size: "9\"x12\", Paper, Watercolor", date: "2024", img: IMG + "led.jpg",
    original: { status: "inquire", price: "", buyUrl: "" },
    print: { url: "https://katrinbarshe.printful.me/product/rgb-led-framed-poster-67d6ff147eb91" } },
  { series: "components", title: "Resistor", size: "9\"x12\", Paper, Watercolor", date: "2024", img: IMG + "resistor.jpg",
    original: { status: "inquire", price: "", buyUrl: "" },
    print: { url: "https://katrinbarshe.printful.me/product/resistor-framed-photo-paper-poster" } },
  { series: "components", title: "Capacitor", size: "9\"x12\", Paper, Watercolor", date: "2024", img: IMG + "capacitor.jpg",
    original: { status: "inquire", price: "", buyUrl: "" },
    print: { url: "https://katrinbarshe.printful.me/product/capacitor-framed-poster-67d70257920ec" } },

  // ---------- Impossible objects ----------
  // TODO: prices taken from the Etsy listings, please check which is which.
  { series: "impossible", title: "IO #1. Penrose Triangle", size: "6\"x6\", Canvas Board, Acrylic", date: "2023", img: IMG + "io-1.jpg",
    original: { status: "available", price: "$80", buyUrl: "" }, print: { url: "" } },
  { series: "impossible", title: "IO #2. Penrose Triangle", size: "6\"x6\", Canvas Board, Acrylic", date: "2023", img: IMG + "io-2.jpg",
    original: { status: "available", price: "$87", buyUrl: "" }, print: { url: "" } },
  { series: "impossible", title: "IO #3. Penrose Triangle", size: "6\"x6\", Canvas Board, Acrylic", date: "2023", img: IMG + "io-3.jpg",
    original: { status: "available", price: "$87", buyUrl: "" }, print: { url: "" } },
  { series: "impossible", title: "IO #4. Arrows", size: "6\"x6\", Canvas Board, Acrylic", date: "2023", img: IMG + "io-4.jpg",
    original: { status: "available", price: "$80", buyUrl: "" }, print: { url: "" } },

  // ---------- Out of series ----------
  { series: "other", title: "1130 Sunny Point Dr", size: "18\"x18\", Canvas Board, Acrylic/Oil", date: "2024", img: IMG + "sunny-point.jpg",
    original: { status: "inquire", price: "", buyUrl: "" }, print: { url: "" } },
  { series: "other", title: "Under Pineda Cswy Bridge", size: "18\"x18\", Canvas Board, Acrylic/Oil", date: "November 2024", img: IMG + "pineda-bridge.jpg",
    original: { status: "inquire", price: "", buyUrl: "" }, print: { url: "" } },
  // TODO: price from the Etsy listing "Earth | Cape Canaveral | Map", please confirm it is this painting.
  { series: "other", title: "Brevard County", size: "48\"x30\", Canvas Board, Acrylic", date: "2024", img: IMG + "brevard-county.jpg",
    original: { status: "available", price: "$1,480", buyUrl: "" }, print: { url: "" } },
  { series: "other", title: "The Shell", size: "18\"x18\", Canvas Board, Texture Paste/Acrylic", date: "2024", img: IMG + "the-shell.jpg",
    original: { status: "inquire", price: "", buyUrl: "" }, print: { url: "" } },
  // TODO: price from the Etsy listing "Sandals", please confirm.
  { series: "other", title: "The Heels", size: "18\"x24\", Canvas Board, Acrylic/Oil", date: "2024", img: IMG + "the-heels.jpg",
    original: { status: "available", price: "$780", buyUrl: "" }, print: { url: "" } },
];
