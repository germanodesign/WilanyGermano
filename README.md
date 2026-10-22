# WILANY GERMANO — OFFICIAL ARTIST WEBSITE

A static GitHub Pages website built using **the user-uploaded original photographs and transparent logos, copied byte-for-byte**. No AI artwork, no regenerated assets, no photo modifications.

## Contents
- `index.html`, `styles.css`, `script.js` — the working site, relative asset paths, no build dependencies.
- `repository root / (flat deployment: `stage-01.jpg`, etc.)` — **all 12 original photos**.
- `repository root / (flat deployment: `wilany-original.png`, `now-and-then-original.png`)` — both original PNG logos (WILANY / Now & Then).
- `repository root / (flat deployment: `WILANY_GERMANO_NOW_THEN_EPK_2026.pdf`)` — September 2026 EPK PDF.
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

## October 22, 2026 — deployment fix and current GitHub layout
The original asset files were uploaded **directly to the repository root**, not under `assets/`. The published `index.html` now points to these actual root filenames. Do **not** move or rename the original asset files without updating HTML references.

All 12 JPEG images, two logos, and the EPK were checked against their original Git blob SHA-1 hashes: byte-for-byte identical. Main banner: original full-screen photo fallback behind muted, looping Vimeo background (video ID 1238307931). Additionally, the site now has a visible in-page Vimeo player in the FILM section, with manual controls for browsers that block background autoplay.

If Vimeo still does not embed, check Vimeo video settings → Share → Embed → 'Where can this be embedded': Anywhere, or include `germanodesign.github.io`. For unlisted videos, copy the exact iframe from Vimeo including the privacy `h=` hash, which cannot be guessed.

Production testing requires a real browser on the deployed GitHub Pages domain; repository verification does not prove remote Vimeo or Pages availability.
