# SlateSchoolLogos — Carousel Redesign
**Date:** 2026-04-14

## Overview

Replace the existing two-row infinite CSS ticker in `components/Home/SlateSchoolLogos.vue` with a two-section carousel:

1. **Testimonial Carousel** — one testimonial at a time, crossfades every 10s
2. **Logo Strip** — 5 horizontal logo tiles visible at once, cycles one in/out every 3s

The component lives at the bottom of the hero section (`Home/Index.vue`, `col-span-12`) and sits on a light background.

---

## Section 1 — Testimonial Carousel

### Layout
- Centered heading above the card: **"60+ Slate Schools and Counting!"** — "60+" in `--rew-primary-green` (#4E6C3C), rest in `--rew-primary-brown` (#433129)
- Single testimonial card, `max-width: 700px`, horizontally centered
- Card contains:
  - **School logo area** (left side on desktop, above quote on mobile): horizontal colored placeholder tile (~140×52px). Background is the school's brand color, text is the school name. When a real logo image is available, an `<img>` tag replaces the tile — no structural change needed.
  - **Quote:** italic brown text (`--rew-primary-brown`)
  - **Attribution:** person name (bold, small) + title (smaller, `--rew-secondary-green`)
- Below card: thin green progress bar (`--rew-primary-green`), fills left→right over 10s and resets on each transition
- Dot indicators below the progress bar, one per school with a testimonial. Active dot is filled green. Clicking a dot jumps to that school and resets the timer.

### Transition
CSS opacity crossfade — outgoing card fades to 0 while incoming fades to 1, over ~400ms. Implemented with Vue `<Transition>`.

### Timing
- Auto-advances every 10s via `setInterval`
- Timer resets when user clicks a dot
- Pauses on hover (`mouseenter`/`mouseleave`)

---

## Section 2 — Logo Strip

### Layout
- No separate heading (Section 1 header serves both sections)
- A row of **5 horizontal logo tiles** visible simultaneously
- Edge fade masks on left and right (same `mask-image` gradient technique as current component)
- Tiles: same horizontal placeholder style as testimonial card logo area (~140×52px colored rect with school name text)
- All schools (including those without testimonials) appear in the strip to show broader "trusted by" breadth

### Transition
Every 3s:
1. Leftmost tile fades out
2. Remaining tiles slide left (CSS transition)
3. New tile fades in from the right

Implemented with a reactive `logoIndex` and JS `setInterval`, rendering a window of 5 schools from a circular array.

### Timing
- Independent 3s `setInterval` from the testimonial carousel
- Pauses on hover
- Loops continuously

---

## Data Structure

Single `schools` array in the component. Testimonial carousel renders only entries with a `testimonial` field. Logo strip renders all entries.

```ts
interface Testimonial {
  quote: string
  person: string
  title: string
}

interface School {
  name: string
  initials: string      // 2-3 letter fallback shown on colored tile
  color: string         // hex — placeholder tile background color
  logo?: string         // path to horizontal logo image — tile used as fallback when absent
  testimonial?: Testimonial
}
```

### Initial Schools

**With testimonials (testimonial carousel + logo strip):**

| School | Initials | Brand Color |
|---|---|---|
| Ouachita Baptist University | OBU | #4A2572 (purple) |
| Teachers College, Columbia University | TC | #003DA5 (Columbia blue) |
| Brown University | BRN | #4E3629 (brown) |
| CUNY City Tech | CCT | #003478 (navy) |
| Moore College of Art & Design | MCA | #006B6B (teal) |
| University of Alabama in Huntsville | UAH | #003087 (blue) |

All 6 carry placeholder `testimonial` data (lorem-style quote, placeholder name/title) until real content is provided.

**Logo strip only (no testimonial):** 8 additional placeholder entries using brand-adjacent colors, for a total of 14 schools in the strip.

---

## Component Structure

**File:** `components/Home/SlateSchoolLogos.vue` (replaced in-place, no new files)

- `<template>`: two sections — testimonial carousel and logo strip
- `<script setup>`: `schools` array, reactive `testimonialIndex` and `logoIndex`, interval management, hover pause logic
- `<style scoped>`: all animation and layout styles self-contained

No Swiper or external carousel library. Pure Vue reactivity + CSS transitions.

---

## Responsive Behavior

| Breakpoint | Testimonial Card | Logo Strip |
|---|---|---|
| Desktop (≥768px) | max-width 700px, logo tile left-aligned | 5 tiles visible |
| Mobile (<768px) | Full width, logo tile above quote | 3 tiles visible, tiles ~100×40px |

---

## Accessibility

- `prefers-reduced-motion`: testimonial shows first entry statically (no auto-advance, no fade); logo strip shows a static flex-wrap row of all schools
- Both intervals are cleared on component unmount (`onUnmounted`)
- Dot indicators have `aria-label` for screen readers

---

## Logo Swap Path

When a real horizontal logo image is available for a school:
1. Add `logo: '/img/school-logos/school-name.png'` to the school's entry in the `schools` array
2. The template conditionally renders `<img :src="school.logo">` vs the colored placeholder tile — no structural changes needed
