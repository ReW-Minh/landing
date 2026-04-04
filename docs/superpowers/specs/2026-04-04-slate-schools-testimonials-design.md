# Slate Schools Testimonials Page — Design Spec

**Date:** 2026-04-04

---

## Overview

Add a "Slate Schools" entry to the site navigation and create a new page that displays testimonials from schools using ReWorkflow's Slate services. Testimonials are grouped by school, with a standardized card format for each person's quote.

---

## Navigation

- Add `Slate Schools` as a top-level item in `NAVIGATION_MENU` (in `utils/constant.ts`) with route `/slate-schools`.
- It appears as a direct link (no dropdown) in both the desktop header (`components/Header.vue`) and the mobile drawer (`components/MobileMenu.vue`) — both consume `NAVIGATION_MENU` automatically.

---

## Page Structure

**Route:** `/slate-schools`
**File:** `pages/slate-schools/index.vue`
**Layout:** default (uses existing `<Header />` and `<Footer />`)

### Sections (top to bottom)

1. **Page Header** — uses the existing `<BasePageHeader>` component.
   - Title: `Slate Schools`
   - Subtitle (italic, placeholder): *"Hear from the admissions and enrollment professionals at institutions across the country who rely on ReWorkflow to power their Slate operations."*

2. **Testimonials** — a list of school groups rendered inside `<BasePageContent>`.

3. **Call to Action** — uses the existing `<CallToAction>` component at the bottom.

---

## Testimonials Data

Testimonials are defined as static data in the page (or a composable) with this shape:

```ts
interface Testimonial {
  name: string       // e.g. "Jane Smith"
  title: string      // e.g. "Director of Admissions"
  quote: string      // 3–5 sentence quote
}

interface SchoolGroup {
  school: string     // e.g. "Boston University"
  initials: string   // e.g. "BU" — used for the avatar circle
  color: string      // brand hex color for the avatar background
  testimonials: Testimonial[]
}
```

Each school can have one or more testimonials. The layout handles both cases without special-casing.

---

## School Group Header

Each school renders a header row:
- A circular avatar with the school's initials (colored background, white text) — 36×36px
- The school name in bold brown (`--rew-primary-brown`)
- A horizontal rule (`<hr>` or `flex-1 border-t`) filling the remaining width

---

## Testimonial Card (Left-Accent Style)

Each testimonial is a card with:
- **No top/bottom padding on the outer wrapper** — the card is a flex row: `[accent-bar][content]`
- **Accent bar:** 5px wide, full card height, `--rew-primary-green` background, no border-radius on left edges (handled by `overflow: hidden` on the card)
- **Content area:** padding `14px 14px 14px 12px`
  - Quote text: italic, `--rew-primary-brown`, `leading-relaxed`
  - Attribution row (below quote): flex row with a 28×28px initials avatar (`--rew-secondary-green` background) + name (bold, brown) and title (small, muted)

Multiple testimonials from one school display in a responsive grid: 2 columns on md+, 1 column on mobile.

---

## CTA Section

Uses the existing `<CallToAction>` component. Centered, with a brief supporting line above it:
> *"Join the 60+ schools trusting ReWorkflow with their Slate operations."*

---

## Files to Create / Modify

| Action | File |
|--------|------|
| Modify | `utils/constant.ts` — add `Slate Schools` to `NAVIGATION_MENU` |
| Create | `pages/slate-schools/index.vue` — new page |

No new components needed — all building blocks (layout, header, CTA, card pattern) already exist in the codebase.
