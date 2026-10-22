# MR — WEBSITE BUILD PROMPT / WILANY GERMANO

**Primary goal:** Implement an original-artist static website for GitHub Pages, honoring September 2026 WILANY GERMANO NOW & THEN EPK, with fully original exact input assets. This is site DEVELOPMENT, not image generation.

## Non-negotiable asset policy
- DO NOT generate, AI-recreate, illustrate, retouch, color grade, erase, substitute, or crop to overwrite any of the user's images or logos.
- Copy the original photo/PNG bytes **unchanged** into `assets/photographs` and `assets/brand`. Refer to those real file paths in `<img>` or CSS; CSS `object-fit: cover`, color overlays and responsive rendering may be used for layout without changing original files.
- Include **all 12 originals** (7 PHOTO files, 3 movement stills, cover.jpg, photo wilany.jpg). Give all user-uploaded images an on-page role in a photo panel, gallery, or background. The gallery must offer source-sized original view.
- Logo header: use the exact existing transparent WILANY PNG. Under it, render GERMANO as HTML text in the same editorial serif family, adjusting LETTER SPACING to exactly match the logo's visible width. No fake or redrawn WILANY logo.
- Use the exact original Now & Then title PNG and preserve existing EPK PDF.

## Design system
- Source: September 2026 EPK; cinematic art direction, black/near-black, burgundy red, amber film stills, editorial serif display + small tracked sans, luxurious white space.
- Focus exclusively on original music. No Side Walk service marketing or Germano cover-project bookings.
- Content: Now & Then (released 15 September 2026), Spotify embed, Dreamer (seven-song album in progress for planned March 2027), bio, verified past live history, original-photo gallery, press kit and contact. Do not invent press quotes, performance dates, venues, prices or a functioning newsletter backend.

## Vimeo and playback requirements
- Embed user's own video 1238307931 from player.vimeo.com on site as hero background, not a link-only preview.
- For best chance of automatic continuous playback set `background=1&autoplay=1&loop=1&muted=1&playsinline=1&autopause=0` and `allow="autoplay; fullscreen; picture-in-picture"`.
- Browser policy means automatic playback with sound cannot be guaranteed; sound must start MUTED. Implement a real user-click 'Enable film sound' using Vimeo Player SDK. Provide a direct-link fallback if embed disallowed. Under reduced-motion preference display original still instead of moving background.
- Do not claim video is successfully playable on production domain without live browser verification and Vimeo embed privacy verification.

## Technical requirements
- Pure static HTML/CSS/JS, no build step, compatible with relative paths in GitHub Pages repository root or subpath.
- Make responsive desktop/tablet/mobile; accessible skip link, labels, semantic headings, alt text, reduced motion support, real buttons, real contacts. No dead fake CTA.
- Include README.md with GitHub Pages deployment instructions; asset SHA-256 manifest; `.nojekyll`.
- Do not modify unrelated Side Walk site or repository.
