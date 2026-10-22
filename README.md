# WILANY GERMANO — OFFICIAL ARTIST WEBSITE

A static GitHub Pages website built using **the user-uploaded original photographs and transparent logos, copied byte-for-byte**. No AI artwork, no regenerated assets, no photo modifications.

## Contents
- `index.html`, `styles.css`, `script.js` — the working site, relative asset paths, no build dependencies.
- `assets/photographs/` — **all 12 original photos**.
- `assets/brand/` — both original PNG logos (WILANY / Now & Then).
- `assets/press/` — September 2026 EPK PDF.
- `ORIGINAL_ASSET_MANIFEST.json` — original filenames and SHA256 verification.
- `MR_MASTER_PROMPT.md` — reproducible research/build specifications.

## Deploy on GitHub Pages (separate repository recommended)
1. Sign in to GitHub `germanodesign`, create **public** repository `wilany-germano`. (The current connector cannot create repositories.)
2. In repository **Add file → Upload files**, drag all FILES AND FOLDERS inside this directory, not the containing directory or ZIP; commit to the default `main` branch. The site's `index.html` must be at repo root.
3. Repository → **Settings → Pages** → Build and deployment → Deploy from a branch → `main` and `/(root)` → Save.
4. Expected URL after GitHub Pages is enabled: `https://germanodesign.github.io/wilany-germano/` (not valid until public deployment is completed).

Do NOT deploy this inside Side Walk's repo; keep the two brands independent.

## Vimeo
Hero background embeds video ID `1238307931` and requests muted, looped autoplay. Browsers do not reliably allow autoplay with sound; user-click sound toggle is included. Vimeo video must allow embedding on the published domain and be available to site visitors. If the video is private/domain restricted the original photo remains visible behind the embed. On devices with reduced motion enabled, the still image remains.

## Verify unchanged assets
Every binary asset was copied without modification. `ORIGINAL_ASSET_MANIFEST.json` records SHA-256. The word "GERMANO" is text deliberately tracked to match the WILANY image width; it is **not** a regenerated logo.

## Local preview
`python3 -m http.server 8765`, then open `http://localhost:8765/`.
