# Sneha Kumari — Portfolio Site

Three files, no build step required:
- `index.html` — page structure and content
- `style.css` — all styling
- `script.js` — hero typing animation + copy-email button

## Preview it locally
Just double-click `index.html` — it opens in your browser directly.

## Put it online (pick one)

### Option A — GitHub Pages (free, easiest, gives you a live link)
1. Create a new GitHub repo, e.g. `sneha-portfolio`.
2. Upload these three files to it (or `git push` them).
3. Go to the repo's **Settings → Pages**.
4. Under "Source", choose the `main` branch and `/ (root)` folder → Save.
5. GitHub gives you a URL like `https://<your-username>.github.io/sneha-portfolio/` within a minute or two.

### Option B — Netlify (drag-and-drop, free)
1. Go to https://app.netlify.com/drop
2. Drag the folder containing these three files onto the page.
3. Netlify gives you a live URL instantly. You can rename it in Site Settings.

### Option C — Vercel (free, good if you'll add more pages later)
1. Go to https://vercel.com, sign up, click "Add New Project".
2. Import the GitHub repo (do Option A's steps 1–2 first), then deploy.

## Editing content later
- Text lives in `index.html` — search for the section you want (`$ projects`, `$ skills`, etc.) and edit directly.
- Colors and fonts are defined once at the top of `style.css` under `:root` — change a value there and it updates everywhere.
- To add a new project card, copy one `<article class="card">...</article>` block under `$ projects` and edit its content.
