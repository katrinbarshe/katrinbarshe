# katrinbarshe.com

Plain HTML/CSS/JS site, no build step. Open `index.html` in a browser to preview.
Design copies the old Strikingly site.

## Files

- `index.html` - home page (art)
- `info.html` - info page
- `assets/img/` - all images
- `works.js` — **all artworks**: titles, sizes, images, prices, buy links. Edit this file to change prices or mark a work as sold.
- `main.js` — builds the artwork cards from `works.js`. Usually no need to touch.
- `styles.css` — design.

## Common edits (all in works.js)

- Set a price for an original: `original: { status: "available", price: "$1,200", buyUrl: "" }`
- Mark as sold: `original: { status: "sold", ... }`
- No price yet: `status: "inquire"` shows "Ask about this work" (opens an email).
- Add a Square payment link for an original: put it in `buyUrl`.
- Add a print: `print: { url: "https://katrinbarshe.printful.me/product/...", from: "$79" }`

## Still to do

- Check prices marked TODO in works.js.
- Publish on GitHub Pages and point katrinbarshe.com to it in GoDaddy.
