# Homepage Landscape Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the bottom of the homepage into a cohesive landscape environment — warm parchment section, dark testimonial band, watercolor treeline, and a dark footer ground — all reading as one designed scene.

**Architecture:** Three targeted changes: (1) `SlateSchoolLogos.vue` gets a parchment background and a new treeline strip at its base, (2) `Footer.vue` gets a treeline element that bleeds upward into the section above, (3) `main.scss` changes the footer background color. The treeline asset (`/public/img/treeline.png`) is provided by the user — a placeholder step handles the case where it hasn't arrived yet.

**Tech Stack:** Vue 3 (Composition API), Nuxt 3, scoped SCSS in `.vue` files, global SCSS in `assets/scss/main.scss`

---

## File Map

| File | Change |
|---|---|
| `components/Home/SlateSchoolLogos.vue` | Add parchment bg to `.slate-logos`; add `.treeline-strip` element + styles at bottom of component |
| `components/Footer.vue` | Add `.footer-trees` element as first child of `<footer>`; add scoped styles |
| `assets/scss/main.scss` | Change `footer { background }` from `var(--rew-secondary-green)` to `#2e2219` |
| `public/img/treeline.png` | Provided by user — drop wide watercolor treeline PNG here |

> **Do not** change `--rew-secondary-green` CSS variable itself — it's used by button hovers, modals, form labels, and card subtitles.

---

## Task 1: Add parchment background to SlateSchoolLogos

**Files:**
- Modify: `components/Home/SlateSchoolLogos.vue`

- [ ] **Step 1: Open the file and locate the `.slate-logos` style block**

  File: `components/Home/SlateSchoolLogos.vue`, line ~236.
  Current:
  ```css
  .slate-logos {
    --logo-tile-w: 168px;
    --logo-tile-h: 62px;
    padding: 24px 0 8px;
    width: 100%;
  }
  ```

- [ ] **Step 2: Add parchment background and flush bottom padding**

  Replace the `.slate-logos` rule with:
  ```css
  .slate-logos {
    --logo-tile-w: 168px;
    --logo-tile-h: 62px;
    padding: 24px 0 0;
    width: 100%;
    background: #f5f0e4;
  }
  ```
  
  `padding-bottom: 0` is intentional — the treeline strip (Task 2) will sit flush at the bottom with no gap before the footer.

- [ ] **Step 3: Start dev server and verify**

  ```bash
  npm run dev
  ```
  
  Open `http://localhost:3000`. Scroll to the SlateSchoolLogos section. Expected: warm parchment background (`#f5f0e4`) visible in the heading area and below the logo carousel. The testimonial band (`#2e2219`) should remain dark — it has its own background so the parchment won't show through it.

- [ ] **Step 4: Commit**

  ```bash
  git add components/Home/SlateSchoolLogos.vue
  git commit -m "feat: add parchment background to SlateSchoolLogos section"
  ```

---

## Task 2: Add treeline strip to SlateSchoolLogos

**Files:**
- Modify: `components/Home/SlateSchoolLogos.vue`

**Prerequisite:** The user will provide `/public/img/treeline.png`. This task creates a placeholder fallback using the existing `tree.svg` so you can verify the layout before the real asset arrives. Swap to `treeline.png` once it's dropped in.

- [ ] **Step 1: Add the treeline strip element to the template**

  In `components/Home/SlateSchoolLogos.vue`, locate the closing `</div>` of `.slate-logos` (the very last line of the `<template>` block, after the `.logo-strip-wrap` div). Add the treeline strip before that closing tag:

  ```html
    <!-- Logo carousel (Swiper) -->
    <div class="logo-strip-wrap" role="region" aria-label="Partner schools">
      ...
    </div>

    <!-- Treeline — bridges into footer -->
    <div class="treeline-strip" aria-hidden="true">
      <img src="/img/treeline.png" alt="" />
    </div>
  </div>
  ```

  > If `treeline.png` hasn't arrived yet, temporarily use `src="/img/tree.svg"` to verify layout. Switch to `treeline.png` once the user drops it in `public/img/`.

- [ ] **Step 2: Add styles for `.treeline-strip`**

  In the `<style scoped>` block, add after the `.logo-swiper-fallback` rule:

  ```css
  .treeline-strip {
    width: 100%;
    margin-top: 16px;
    line-height: 0;
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

  `object-position: bottom` ensures the tree trunks and ground are always visible at the strip's bottom edge (where it meets the footer). `line-height: 0` eliminates the inline image gap.

- [ ] **Step 3: Verify in browser**

  With dev server running, scroll to the bottom of the homepage. Expected:
  - Treeline image fills the full width below the logo carousel
  - No gap between the treeline bottom edge and the footer
  - On mobile (< 768px): strip is 140px tall
  - Image is not stretched — it crops from the bottom if needed

- [ ] **Step 4: Commit**

  ```bash
  git add components/Home/SlateSchoolLogos.vue
  git commit -m "feat: add treeline panorama strip to SlateSchoolLogos"
  ```

---

## Task 3: Change footer background to dark ground

**Files:**
- Modify: `assets/scss/main.scss`

- [ ] **Step 1: Locate the footer background rule**

  In `assets/scss/main.scss`, around line 360:
  ```css
  footer {
    background: var(--rew-secondary-green);
    padding: 20px 0;
  }
  ```

- [ ] **Step 2: Update the background and add top padding for tree overlap**

  Replace with:
  ```css
  footer {
    background: #2e2219;
    padding: 72px 0 20px;
    position: relative;
    overflow: visible;
  }
  ```

  `padding-top: 72px` creates space below the tree tops that will bleed in from Task 4. `overflow: visible` allows the absolutely-positioned tree element to extend above the footer boundary. `position: relative` creates the positioning context for `.footer-trees`.

- [ ] **Step 3: Verify in browser**

  Expected:
  - Footer background is dark brown (`#2e2219`) — same as the testimonial band
  - White text (logo, copyright, social icons) is still readable — good contrast on dark brown
  - No other elements on the page have changed color (button hovers, modals, form labels still use `--rew-secondary-green` via the CSS variable, which is untouched)

- [ ] **Step 4: Commit**

  ```bash
  git add assets/scss/main.scss
  git commit -m "feat: change footer to dark ground color #2e2219"
  ```

---

## Task 4: Add treeline overlap to footer

**Files:**
- Modify: `components/Footer.vue`

- [ ] **Step 1: Add `.footer-trees` as the first child of `<footer>`**

  In `components/Footer.vue`, the current template opens with:
  ```html
  <template>
    <footer>
      <div class="container-fluid">
  ```

  Add the treeline element before `.container-fluid`:
  ```html
  <template>
    <footer>
      <div class="footer-trees" aria-hidden="true">
        <img src="/img/treeline.png" alt="" />
      </div>
      <div class="container-fluid">
  ```

  > Same asset as the SlateSchoolLogos strip. If using the placeholder `tree.svg` temporarily, use it here too.

- [ ] **Step 2: Add scoped styles to Footer.vue**

  In `components/Footer.vue`, inside the existing `<style scoped lang="scss">` block, add before `.social-hover`:

  ```scss
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
    object-position: top;
  }

  @media (max-width: 767px) {
    .footer-trees img {
      height: 110px;
    }
  }
  ```

  `position: absolute; bottom: 100%` anchors the element to the top edge of the footer and extends it upward. `object-position: top` shows the tree canopy tops (the upper portion of the same treeline asset), which appears to grow up from the footer ground.

- [ ] **Step 3: Verify full landscape in browser**

  Scroll to the very bottom of the homepage. Expected visual reading (top to bottom):
  - Parchment section with testimonial band and logo carousel
  - Treeline strip (tree trunks + ground, ~220px) — bottom of SlateSchoolLogos
  - Tree canopy tops bleeding upward (~180px) out of the footer — top of Footer
  - Dark brown footer ground (`#2e2219`) with logo, social links, copyright
  
  The treeline strip and footer tree overlap may show a seam at the join line — if visible, reduce `margin-top` on `.treeline-strip` to `8px` or `0` in Task 2's styles to close the gap.

- [ ] **Step 4: Verify on mobile**

  Resize to < 768px. Expected:
  - Treeline strip is 140px tall
  - Footer tree overlap is 110px tall
  - No layout overflow or horizontal scroll introduced

- [ ] **Step 5: Swap placeholder for real treeline asset**

  Once user drops `treeline.png` into `/public/img/treeline.png`:
  - Both `src="/img/tree.svg"` references (in `SlateSchoolLogos.vue` and `Footer.vue`) become `src="/img/treeline.png"` — already set that way if you followed the plan with `treeline.png` from the start.
  - Verify `object-position: bottom` in `.treeline-strip img` and `object-position: top` in `.footer-trees img` produce the right crop. Adjust values (e.g., `object-position: center bottom`) if the asset has whitespace at edges.

- [ ] **Step 6: Final visual pass**

  Check at three widths: mobile (~390px), tablet (~768px), desktop (~1440px). The treeline should feel continuous — the bottom of the SlateSchoolLogos strip and the top of the footer overlap should read as one unbroken forest edge.

- [ ] **Step 7: Commit**

  ```bash
  git add components/Footer.vue
  git commit -m "feat: add treeline landscape overlap to footer"
  ```

---

## Post-Implementation Checklist

- [ ] Treeline asset swapped from placeholder to real `treeline.png`
- [ ] No horizontal overflow at any viewport width (`overflow-x` check)
- [ ] Footer white text remains readable on `#2e2219` (WCAG AA: ratio ≥ 4.5:1 — white `#fff` on `#2e2219` is ~12:1, well above threshold)
- [ ] `overflow: visible` on footer doesn't clip or break any existing footer behavior on other pages (check `/services`, `/about`, `/contact`)
- [ ] `.superpowers/` added to `.gitignore` if not already present
