# A Little Secret for Jannu

A romantic birthday surprise with a three-clue suspense sequence, a countdown to November 6, a photo reveal, and a personal birthday letter. It is a static website made with HTML, CSS, and JavaScript; no installation or build step is needed.

## Preview

Open `index.html` in a current browser. The supplied eye photo is included locally in `photos/`, so it works offline. The decorative typefaces load from Google Fonts when an internet connection is available, with local fallback fonts otherwise.

## Personalize it

At the top of `script.js`, edit the `CONFIG` object:

- `recipientName`: currently `Jannu`
- `birthdayMonth` and `birthdayDay`: month is zero-based (`10` means November), and the day is `6`
- `birthdayYear`: leave `null` for the next November 6, or enter a specific year
- `portrait`: currently `photos/jannu-eyes.jpg`; replace the image in that location or point this setting to another local image

The birthday letter is in `index.html`. You can replace its paragraphs with details, favorite memories, or an inside joke as you share them. The three clue lines are also in `index.html` and can be rewritten to make the reveal more personal.

## Share it

Upload the complete `birthday-wish` folder to a static hosting service. Keep `index.html`, `styles.css`, `script.js`, and the `photos/` folder together. Once published, share the page URL with Jannu.

## Files

- `index.html` — suspense sequence, birthday reveal, and letter
- `styles.css` — dark romantic theme, layout, and animations
- `script.js` — name, countdown, reveal flow, and letter interaction
- `photos/jannu-eyes.jpg` — the image you supplied
