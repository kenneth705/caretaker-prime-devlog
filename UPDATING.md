# Updating the Caretaker Prime dev log

The site is a plain static folder: `index.html` + `data.js` + `media/`. It works by
double-clicking `index.html` and on GitHub Pages. No build step.

## Add a dev log entry
Edit `data.js`, add an object at the **top** of `devlog` (newest first):

```js
{ date: "2026-09-28", time: "14:10", title: "Short plain title",
  items: ["What happened.", "What didn't work, if anything."] },
```

Also bump `updated` at the top of `data.js`, and adjust `stats` / `next` if they changed.

## Add images
1. Convert to webp, max ~1600 px, ideally under 400 KB (the repo's `.venv` has Pillow):
   ```sh
   .venv/bin/python -c "from PIL import Image; im=Image.open('in.png'); im.thumbnail((1600,1600)); im.save('site/media/name.webp', quality=82, method=6)"
   ```
2. Reference it by relative path (`media/name.webp`) in `data.js` (props, babies) or in
   `index.html` for one-off sections.
3. Never put absolute paths, usernames, keys or the internal brand PDF in `site/`.

## Add a prop
Add `{ name, key, scale, tris, why }` to `props` and drop `media/prop_<key>_concept.webp`
and `media/prop_<key>_3d.webp`.

## Style rules
The page is built from the fal share-site template: monochrome liquid glass, glitch dust,
fal lock-up, pill controls, dark by default. Build new sections from the existing classes
(`glass`, `glass-raised`, `card`, `prose`, `chip`, `step`, `tile`). Don't add colours;
the game art carries the colour. `chip fill` is reserved for Kenneth's creature pick.

## Publish
```sh
tools/publish_site.sh "Devlog: short description of the update"
```
This syncs `site/` into the local clone of the public repo
(`kenneth705/caretaker-prime-devlog`), commits and pushes to `main`. GitHub Pages
redeploys in a minute or two: https://kenneth705.github.io/caretaker-prime-devlog/
