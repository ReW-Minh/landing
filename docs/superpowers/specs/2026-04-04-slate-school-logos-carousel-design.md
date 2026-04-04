# Slate School Logos Ticker — Design Spec
**Date:** 2026-04-04

## Overview

Replace the placeholder `SlateSchoolLogos.vue` component with a production-ready two-row infinite ticker showcasing partner Slate schools. The component sits at the bottom of the hero section (`Home/Index.vue`, `col-span-12`).

---

## Visual Design

### Row 1 — Logo + Name with Static Header
- Static centered heading above the ticker: **"60+ Slate Schools and Counting!"** with the "60+" in `--rew-primary-green` (#4E6C3C), the rest in `--rew-primary-brown` (#433129)
- Ticker: horizontal infinite scroll of white pill-shaped items, each containing:
  - A 28×28px circular logo image (fallback: colored circle with 2-letter initials)
  - School name in bold brown text
- Pills have a subtle white background + soft box shadow
- Scroll direction: left (right-to-left)
- Speed: ~22s per loop

### Row 2 — Logo Only with Inline "60+" Badge
- No static header — the count label scrolls inline
- Ticker items:
  - 44×44px circular logo images (fallback: colored circles with initials)
  - A green pill badge **"60+ Slate Schools and Counting!"** appears once per loop cycle
  - Thin vertical dividers (`#C8CEC6`) flank the badge to separate it from the logos
- Scroll direction: left (same as Row 1)
- Speed: ~26s per loop (slightly slower for visual depth)

### Edge Fading
Both rows use a `mask-image` CSS gradient fade on the left and right edges (~6% on each side) to give a soft entry/exit.

---

## Data Structure

Schools are defined as a static array in the component:

```ts
interface School {
  name: string       // e.g. "Boston University"
  initials: string   // e.g. "BU" — used as fallback when no logo
  color: string      // hex — fallback circle background
  logo?: string      // optional: path to real logo image (future)
}
```

Start with ~10 placeholder entries using brand-adjacent colors. When real logos arrive, add `logo` paths and the component renders `<img>` instead of the colored circle.

---

## Animation

Pure CSS `@keyframes` translate (no Swiper). Swiper is overkill for a continuous ticker and adds unnecessary JS overhead. Each row has its own `ticker-track` div with its items duplicated (original + copy) — the animation translates `-50%` to create a seamless loop.

```
[item1 item2 ... itemN | item1 item2 ... itemN]
                        ^ animation resets here invisibly
```

Both rows pause on `prefers-reduced-motion`.

---

## Component Structure

**File:** `components/Home/SlateSchoolLogos.vue`

- `<template>`: two ticker wrappers, each containing a `ticker-track` div with duplicated items
- `<script setup>`: school data array, no external state or props needed
- `<style scoped>`: all animation and layout styles self-contained

**No new files needed.** The existing component is replaced in-place.

---

## Responsive Behavior

- Logo circles scale down slightly on mobile (28→22px for Row 1, 44→34px for Row 2)
- Pill font size reduces on mobile (12px→10px)
- Edge fade narrows on mobile (6%→4%) to show more content
- Both rows remain functional at all breakpoints — horizontal overflow is hidden

---

## Future Logo Swap

When real school logos are available:
1. Add image paths to the `schools` array under the `logo` field
2. The component conditionally renders `<img :src="school.logo">` vs the fallback circle — no structural changes needed
