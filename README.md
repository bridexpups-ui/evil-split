# EVIL SPLIT GENERATOR

Your split is shit. Here's a worse one.

A cursed gym-split poster generator, built in the style of those
black-and-red AI workout splits that get reposted until they turn to mush.
Press the button, get seven days of increasingly unhinged training.

## What it does

- **Four intensity tiers** — `NATTY` (almost a real program, slightly wrong),
  `ENHANCED` (meme split energy), `DEMONIC` (unhinged), `GOONMODE` (banned in
  three gyms). 94 workout entries in total; the selected tier is weighted to
  dominate the week so each one actually reads differently.
- **Everything rerolls together** — split name, sets and reps, stickers, star
  rating, review count, stats and the comment section.
- **Copy to clipboard** as plain text, for ruining someone's week in a group chat.
- Press <kbd>R</kbd> to reroll without aiming at the button.

## Row art

Ten generated images live in `img/`, listed by `img/list.js`. The page reads
that file at load; if it's missing, it falls back to hand-drawn SVG silhouettes
so the site never renders empty.

To use your own art, drop files into `img/` and either regenerate `list.js` or
fill in `CUSTOM_ART` at the top of `script.js`, which overrides both. See
[`img/README.txt`](img/README.txt) for prompts that match the look.

## Comment avatars

Initials on a hue derived from the handle, so a given user is always the same
colour. One in twelve gets one of four drawn rare avatars instead. Tune with
`RARE_ODDS` and `RARE_AVATARS` near the top of `script.js`.

## Running it

No build step, no dependencies. Open `index.html`, or serve the folder:

```bash
python -m http.server 4321
```

Serving it is only needed for the fonts and images to load cleanly — the page
itself works straight off the filesystem.

## Disclaimer

This is a joke. It is not a workout program. Do not perform "ASCEND — leave the
mortal plane 3x8". Your calves are genetic and there is nothing anyone can do
for you.
