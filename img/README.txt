DROP YOUR ART IN HERE
=====================

This folder is for the row art on the split poster -- the cropped
muscle-demon / skull / pitbull images.

HOW TO USE IT

  1. Generate or save the images you want. Square-ish works best,
     since each one gets cropped by the row. PNG, JPG and WEBP all work.
  2. Put the files in this folder.
  3. Open script.js and find CUSTOM_ART near the top. List the filenames:

       const CUSTOM_ART = ["demon1.png", "pitbull.jpg", "skullguy.webp"];

  4. Reload. The drawn SVG art is ignored and yours is used instead,
     picked at random per row, with the same glow and crop.

To go back to the drawn art, empty the array again:

       const CUSTOM_ART = [];

WHERE TO GET THE IMAGES

  Any image generator will do it -- Midjourney, Stable Diffusion,
  Leonardo, Bing Image Creator, whatever you already use.

  Prompts that land close to the reference posters:

    "hyper muscular demon bodybuilder, glowing red veins, black
     background, dramatic red rim lighting, airbrushed digital art,
     intense horror gym poster, high contrast"

    "snarling pitbull head, red glowing eyes, lightning, black
     background, aggressive gym poster art, hyper detailed"

    "flaming skull with bulging muscular neck and traps, red and
     orange glow, black background, metal album cover art"

    "anatomical heart wrapped in lightning, red glow, black
     background, biomechanical, gym poster"

  Keep the background black -- the rows are black, so the art blends
  into the edge instead of sitting in an obvious box.
