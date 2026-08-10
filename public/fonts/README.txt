FONTS — drop-in
================

This site is designed around two typefaces you own/license:

  1. BALBOA        →  save as:  Balboa.woff2
  2. SHADOW LIGHT  →  save as:  ShadowLight.woff2

Put both files in THIS folder (Portfolio/public/fonts/). That's it —
the CSS already points here via @font-face, so the moment the files
exist the real fonts take over. No code change required.

Until then, the site renders with tasteful free fallbacks:
  - Balboa       → Oswald             (condensed)
  - Shadow Light → Cormorant Garamond (light italic)

Notes
-----
- .woff2 is strongly preferred. If you only have .ttf/.otf, convert once
  at https://cloudconvert.com/ttf-to-woff2 then drop the .woff2 in here.
- If your file has a different name, either rename it to the names above
  or update the two @font-face src urls at the top of src/index.css.
- These are commercial fonts; only add files you're licensed to use for web.
