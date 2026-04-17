# Homepage Landscape Redesign

**Date:** 2026-04-17
**Scope:** `components/Home/SlateSchoolLogos.vue`, `components/Footer.vue`, `assets/scss/main.scss`

## Goal

Make the bottom of the homepage feel like a cohesive designed environment — warm parchment section flowing into a watercolor treeline, grounding into a dark footer — rather than a stack of disconnected bands.

## Already Completed (Quick Fixes)

- Removed progress bar below testimonials
- Removed navigation dots below progress bar
- Removed left/right fade mask on logo carousel
- Testimonial band background changed to `#2e2219` (rich brown) with warm cream text
- ReW "O" watermark enlarged to 750px and centered in the hero column

## Color Palette

| Token | Value | Use |
|---|---|---|
| Parchment | `#f5f0e4` | SlateSchoolLogos section background |
| Dark Ground | `#2e2219` | Testimonial band + footer background |
| ReW Brown | `#433129` | Heading text |
| ReW Green | `#4E6C3C` | Accent / count text |
| Quote text | `#e8d9c8` | Testimonial quote on dark bg |
| Attribution | `#f0e6d8` | Person/title on dark bg |
| School name | `#b89070` | School name on dark bg |

## Required Asset

**`/public/img/treeline.png`** (or `.svg`) — watercolor evergreen/pine treeline panorama, wide enough to cover full viewport width (2400px+ recommended). Transparent sky, trees with natural variation in height. User will provide this file.

## Section 1 — SlateSchoolLogos (`components/Home/SlateSchoolLogos.vue`)

### Background
The entire `.slate-logos` component gets `background: #f5f0e4` (parchment). This creates a warm scene distinct from the white hero above.

### Layout (top to bottom)
1. **Heading** — "60+ Slate Schools and Counting!" — existing styles, brown text on parchment. Adjust `margin-bottom` if needed for visual breathing room.
2. **Testimonial band** — `.testimonial-full-bleed` — already `#2e2219`, full-width. No structural changes. Feels like a designed content card within the landscape.
3. **Logo carousel** — `.logo-strip-wrap` — on parchment. No functional changes.
4. **Treeline strip** — new `.treeline-strip` div at the bottom of the component. Full viewport width, ~220px tall. Renders the `treeline.png` asset as a `<img>` with `width: 100%; height: 220px; object-fit: cover; object-position: bottom; display: block`. No bottom margin — runs flush into the footer. On mobile: height reduced to ~140px.

### CSS additions to `.slate-logos`
```css
.slate-logos {
  background: #f5f0e4;
  padding-bottom: 0; /* flush treeline into footer */
}

.treeline-strip {
  width: 100%;
  margin-top: 24px;
}

.treeline-strip img {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: bottom;
}

@media (max-width: 767px) {
  .treeline-strip img {
    height: 140px;
  }
}
```

## Section 2 — Footer (`components/Footer.vue` + `assets/scss/main.scss`)

### Background
Footer background changes from `var(--rew-secondary-green)` to `#2e2219` in `main.scss`. This matches the testimonial band — same dark ground, unified.

### Treeline overlap
Inside `Footer.vue`, add a `.footer-trees` element as the first child inside `<footer>`. It renders `treeline.png` positioned to bleed upward:

```css
footer {
  position: relative;
  overflow: visible; /* allow tree tops to bleed up */
  background: #2e2219;
  padding-top: 80px; /* room below the tree tops */
}

.footer-trees {
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 100%;
  pointer-events: none;
  line-height: 0;
}

.footer-trees img {
  display: block;
  width: 100%;
  height: 180px;
  object-fit: cover;
  object-position: top; /* show tree tops */
}

@media (max-width: 767px) {
  .footer-trees img {
    height: 110px;
  }
}
```

The treeline strip in `SlateSchoolLogos` and the overlap in the footer use the **same asset** — the treeline strip shows the bottom of the trees (trunks/ground), the footer overlap shows the tops. Together they make a continuous forest.

### Footer text colors
Update all footer text and icon colors from white-on-green to white/cream-on-dark-brown. The existing white text already works on `#2e2219` — no changes needed unless contrast testing reveals issues.

## Visual Reading (full page bottom)

```
hero (white) ───────────────────────────────────────
  [hero content + ReW "O" watermark]

parchment (#f5f0e4) ────────────────────────────────
  60+ Slate Schools and Counting!

  ████████ TESTIMONIAL BAND (#2e2219) ████████████
  "Quote…" — Person, Title
  School Name
  ████████████████████████████████████████████████

  [logo] [logo] [logo] [logo] [logo] (carousel)

  🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲 (treeline strip, bottoms)

dark ground (#2e2219) ──────────────────────────────
  🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲 (tree tops bleed up)

  [ReW logo]   [LinkedIn] [Email]   [Slate Gold]
            © 2026 ReWorkflow
```

## Out of Scope

- No changes to hero section (the "O" centering/sizing was a quick fix, already done)
- No changes to other pages' use of `.bg-logo`
- No changes to testimonial auto-advance logic
- Treeline asset creation — user provides this

## Open Question

Once the `treeline.png` asset is provided, verify the `object-position` values produce the right crop on both mobile and desktop. May need adjustment per the specific asset.
