# katrinbarshe.com

Plain HTML/CSS/JS site, no build step. Preview with Live Server in VS Code
(or open `index.html` in a browser).

## Pages

- `index.html` - home page = The Shell series: one painting large on the first screen,
  the text about the series, the paintings in two columns, photos of a gallery interior
- `components.html` - Components watercolors on a white page
- `out-of-series.html` - "Other works" in the menu; Impossible objects are a group at the end
  (`impossible-objects.html` only redirects there)
- `info.html` - about the artist, with the map of Florida
- `buying.html` - how buying and shipping work (linked from the footer)

## Files

- `works.js` - **all artworks**: titles, sizes, images, prices, buy links.
  Edit this file to change prices or mark a work as sold.
- `main.js` - builds the artwork blocks from `works.js`, opens a painting large on click.
  Usually no need to touch.
- `parallax.js` - moves the photo band on Other works while the page scrolls
- `styles.css` - design: colors, type sizes, layout
- `assets/img/` - all images; `assets/img/og-shells.jpg` is the picture shown when a link
  to the site is shared in social networks or messengers
- `assets/fonts/` - the Barlow typeface (free, SIL Open Font License)

## Common edits (all in works.js)

- Change a price: `original: { status: "available", price: "$1,200", buyUrl: "..." }`
- Mark as sold: `original: { status: "sold", ... }` (shows "Original sold")
- No price yet: `status: "inquire"` shows "Ask about this work" (opens an email).
- Square payment link for an original: put it in `buyUrl`.
- Add a print: `print: { url: "https://katrinbarshe.printful.me/product/..." }`
  or several: `print: { options: [{ label: "Canvas print", price: "$195", url: "..." }] }`

## Link to one painting

Every work has its own address made from its image name:
`katrinbarshe.com/#shell-13`, `katrinbarshe.com/components.html#led`,
`katrinbarshe.com/out-of-series.html#io-1`. The link scrolls to the painting and opens it.

## The first screen

The painting on the first screen is set in `index.html` (`data-open="shell-12"` and the
image next to it). The thin lines with "48 in" and "30 in" show the real size of the painting.
