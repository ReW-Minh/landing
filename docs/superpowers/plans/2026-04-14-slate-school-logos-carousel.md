# SlateSchoolLogos Carousel Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing two-row infinite CSS ticker in `SlateSchoolLogos.vue` with a testimonial carousel (10s crossfade) and a logo strip (one tile fades out/in every 3s).

**Architecture:** Single Vue 3 SFC (`components/Home/SlateSchoolLogos.vue`) replaced in-place. No new files. Two independent `setInterval` timers control the two sections. Logo strip uses a slot-array technique — each slot has a stable `id` so keys never change, only the `school` data and `visible` flag inside each slot changes, driving CSS opacity transitions.

**Tech Stack:** Vue 3 Composition API, TypeScript, scoped CSS, `<Transition>` (testimonial fade), manual CSS transitions on logo strip tiles.

---

## File Structure

- **Modify:** `components/Home/SlateSchoolLogos.vue` — full in-place replacement across all tasks

---

## Task 1: Replace component with data layer + empty shell

**Files:**
- Modify: `components/Home/SlateSchoolLogos.vue`

- [ ] **Step 1: Replace the entire file with the typed data layer and an empty template**

```vue
<template>
  <div class="slate-logos">
    <!-- sections added in subsequent tasks -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Testimonial {
  quote: string
  person: string
  title: string
}

interface School {
  name: string
  initials: string
  color: string
  logo?: string
  testimonial?: Testimonial
}

interface LogoSlot {
  id: number
  school: School
  visible: boolean
}

const VISIBLE_LOGOS = 5

const schools: School[] = [
  // --- Schools with testimonials ---
  {
    name: 'Ouachita Baptist University',
    initials: 'OBU',
    color: '#4A2572',
    testimonial: {
      quote: 'ReWorkflow has been an invaluable partner in optimizing our Slate environment. Their expertise and responsiveness have made a real difference in how our team operates.',
      person: 'Jane Smith',
      title: 'Director of Admissions'
    }
  },
  {
    name: 'Teachers College, Columbia University',
    initials: 'TC',
    color: '#003DA5',
    testimonial: {
      quote: 'Working with ReWorkflow has transformed how we use Slate. They understand higher ed operations deeply and deliver solutions that actually work for our team.',
      person: 'John Doe',
      title: 'Enrollment Systems Manager'
    }
  },
  {
    name: 'Brown University',
    initials: 'BRN',
    color: '#4E3629',
    testimonial: {
      quote: "The cycle prep support alone saved us weeks of work. ReWorkflow's team feels like a true extension of our staff — knowledgeable, reliable, and always a step ahead.",
      person: 'Sarah Lee',
      title: 'VP of Enrollment'
    }
  },
  {
    name: 'CUNY City Tech',
    initials: 'CCT',
    color: '#003478',
    testimonial: {
      quote: "ReWorkflow's Slate expertise is unmatched. From complex integrations to day-to-day support, they deliver fast, high-quality results every time.",
      person: 'Michael Chen',
      title: 'Senior Systems Analyst'
    }
  },
  {
    name: 'Moore College of Art & Design',
    initials: 'MCA',
    color: '#006B6B',
    testimonial: {
      quote: 'We trust ReWorkflow with our most critical Slate workflows. Their team is proactive, thorough, and genuinely invested in our success.',
      person: 'Emily Torres',
      title: 'Associate Director of Admissions'
    }
  },
  {
    name: 'University of Alabama in Huntsville',
    initials: 'UAH',
    color: '#003087',
    testimonial: {
      quote: 'Highly recommend ReWorkflow to any institution looking to get more out of Slate. They are true partners who understand our goals, not just vendors.',
      person: 'David Park',
      title: 'Director of Enrollment Management'
    }
  },
  // --- Logo strip only ---
  { name: 'Stanford University',      initials: 'SU',  color: '#8C1515' },
  { name: 'Georgetown University',    initials: 'GU',  color: '#041E42' },
  { name: 'University of Michigan',   initials: 'UM',  color: '#00274C' },
  { name: 'New York University',      initials: 'NYU', color: '#57068C' },
  { name: 'Northeastern University',  initials: 'NEU', color: '#C8102E' },
  { name: 'Loyola University Chicago',initials: 'LUC', color: '#832E2D' },
  { name: 'Fordham University',       initials: 'FU',  color: '#811B24' },
  { name: 'DePaul University',        initials: 'DPU', color: '#23417A' },
]
</script>

<style scoped>
.slate-logos {
  padding: 24px 0 8px;
}
</style>
```

- [ ] **Step 2: Verify the home page still renders without errors**

Run: `yarn dev`
Expected: Home page loads, the logo area is blank (no ticker, no carousel yet) with no console errors.

- [ ] **Step 3: Commit**

```bash
git add components/Home/SlateSchoolLogos.vue
git commit -m "feat: scaffold SlateSchoolLogos with typed school data"
```

---

## Task 2: Testimonial carousel — template, script logic, CSS

**Files:**
- Modify: `components/Home/SlateSchoolLogos.vue`

- [ ] **Step 1: Add testimonial carousel state to `<script setup>` (after the `schools` array)**

```ts
// ── Testimonial carousel ──────────────────────────────────────────────────

const testimonialSchools = schools.filter(s => s.testimonial)
const testimonialIndex = ref(0)
const isHoveringTestimonial = ref(false)

function currentSchool() {
  return testimonialSchools[testimonialIndex.value]
}

let testimonialTimer: ReturnType<typeof setInterval> | null = null

function startTestimonialTimer() {
  if (testimonialTimer) clearInterval(testimonialTimer)
  testimonialTimer = setInterval(() => {
    if (!isHoveringTestimonial.value) {
      testimonialIndex.value = (testimonialIndex.value + 1) % testimonialSchools.length
    }
  }, 10000)
}

function goToTestimonial(index: number) {
  testimonialIndex.value = index
  startTestimonialTimer()
}

onMounted(() => {
  startTestimonialTimer()
})

onUnmounted(() => {
  if (testimonialTimer) clearInterval(testimonialTimer)
})
```

- [ ] **Step 2: Add the testimonial carousel markup to `<template>` (inside `.slate-logos`)**

```html
<!-- Heading -->
<div class="heading text-2xl">
  <span class="count">60+</span> Slate Schools and Counting!
</div>

<!-- Testimonial Carousel -->
<div
  class="testimonial-section"
  @mouseenter="isHoveringTestimonial = true"
  @mouseleave="isHoveringTestimonial = false"
>
  <Transition name="fade" mode="out-in">
    <div class="testimonial-card" :key="testimonialIndex">
      <!-- Logo tile (left on desktop, above on mobile) -->
      <div class="card-logo">
        <img
          v-if="currentSchool().logo"
          :src="currentSchool().logo"
          :alt="currentSchool().name"
          class="logo-img"
        />
        <div
          v-else
          class="logo-tile"
          :style="{ background: currentSchool().color }"
        >
          {{ currentSchool().name }}
        </div>
      </div>

      <!-- Quote and attribution -->
      <div class="card-body">
        <p class="quote">"{{ currentSchool().testimonial!.quote }}"</p>
        <div class="attribution">
          <span class="person">{{ currentSchool().testimonial!.person }}</span>
          <span class="title-text">{{ currentSchool().testimonial!.title }}</span>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Progress bar — :key resets the CSS animation on each advance -->
  <div class="progress-track">
    <div class="progress-bar" :key="`pb-${testimonialIndex}`"></div>
  </div>

  <!-- Dot indicators -->
  <div class="dots" role="tablist" aria-label="Testimonial navigation">
    <button
      v-for="(school, i) in testimonialSchools"
      :key="school.name"
      class="dot"
      :class="{ active: i === testimonialIndex }"
      role="tab"
      :aria-selected="i === testimonialIndex"
      :aria-label="`View ${school.name} testimonial`"
      @click="goToTestimonial(i)"
    />
  </div>
</div>
```

- [ ] **Step 3: Add testimonial CSS to `<style scoped>`**

```css
/* ── Heading ── */
.heading {
  text-align: center;
  font-weight: 700;
  color: #433129;
  letter-spacing: 0.02em;
  margin-bottom: 28px;
}
.count {
  color: #4E6C3C;
}

/* ── Testimonial section ── */
.testimonial-section {
  max-width: 700px;
  margin: 0 auto 28px;
}

.testimonial-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  padding: 20px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  min-height: 120px;
}

/* Logo tile */
.card-logo {
  flex-shrink: 0;
}
.logo-tile {
  width: 140px;
  height: 52px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: white;
  text-align: center;
  padding: 0 8px;
  line-height: 1.2;
}
.logo-img {
  width: 140px;
  height: 52px;
  object-fit: contain;
  border-radius: 8px;
}

/* Quote and attribution */
.card-body {
  flex: 1;
}
.quote {
  font-style: italic;
  color: #433129;
  font-size: 13px;
  line-height: 1.6;
  margin-bottom: 10px;
}
.attribution {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.person {
  font-weight: 700;
  font-size: 12px;
  color: #433129;
}
.title-text {
  font-size: 11px;
  color: #6B8C52;
}

/* Progress bar */
.progress-track {
  height: 3px;
  background: #E8EDE6;
  border-radius: 2px;
  margin: 12px 0 10px;
  overflow: hidden;
}
.progress-bar {
  height: 100%;
  background: #4E6C3C;
  border-radius: 2px;
  animation: progress 10s linear forwards;
}
@keyframes progress {
  from { width: 0%; }
  to   { width: 100%; }
}

/* Dots */
.dots {
  display: flex;
  justify-content: center;
  gap: 8px;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #C8CEC6;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, transform 0.2s;
}
.dot.active {
  background: #4E6C3C;
  transform: scale(1.25);
}

/* Testimonial fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
```

- [ ] **Step 4: Verify testimonial carousel in the browser**

Open `http://localhost:3000` (dev server still running).
Expected:
- Heading "60+ Slate Schools and Counting!" visible
- Testimonial card with colored tile + quote + attribution
- Progress bar fills over 10s, then card crossfades to next testimonial
- Dots show at bottom; clicking a dot jumps to that school and resets the bar
- Hovering the card pauses auto-advance

- [ ] **Step 5: Commit**

```bash
git add components/Home/SlateSchoolLogos.vue
git commit -m "feat: add testimonial carousel to SlateSchoolLogos"
```

---

## Task 3: Logo strip — template, script logic, CSS

**Files:**
- Modify: `components/Home/SlateSchoolLogos.vue`

- [ ] **Step 1: Add logo strip state to `<script setup>` (after testimonial state)**

```ts
// ── Logo strip ────────────────────────────────────────────────────────────

let slotIdCounter = VISIBLE_LOGOS
let nextSchoolIndex = VISIBLE_LOGOS
const isHoveringLogos = ref(false)

const logoSlots = ref<LogoSlot[]>(
  schools.slice(0, VISIBLE_LOGOS).map((school, i) => ({
    id: i,
    school,
    visible: true
  }))
)

function advanceLogo() {
  // Fade out the first slot
  logoSlots.value[0].visible = false

  setTimeout(() => {
    // Remove faded-out slot from beginning
    logoSlots.value.shift()

    // Push new slot at end (invisible initially)
    const newSchool = schools[nextSchoolIndex % schools.length]
    nextSchoolIndex++
    logoSlots.value.push({
      id: slotIdCounter++,
      school: newSchool,
      visible: false
    })

    // Trigger fade-in on the new slot after one frame
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        logoSlots.value[VISIBLE_LOGOS - 1].visible = true
      })
    })
  }, 380)
}

let logoTimer: ReturnType<typeof setInterval> | null = null

function startLogoTimer() {
  if (logoTimer) clearInterval(logoTimer)
  logoTimer = setInterval(() => {
    if (!isHoveringLogos.value) advanceLogo()
  }, 3000)
}
```

- [ ] **Step 2: Add `startLogoTimer()` to `onMounted` and cleanup to `onUnmounted`**

Replace the existing `onMounted` and `onUnmounted` calls with:

```ts
onMounted(() => {
  startTestimonialTimer()
  startLogoTimer()
})

onUnmounted(() => {
  if (testimonialTimer) clearInterval(testimonialTimer)
  if (logoTimer) clearInterval(logoTimer)
})
```

- [ ] **Step 3: Add logo strip markup to `<template>` (after the closing `</div>` of `.testimonial-section`)**

```html
<!-- Logo Strip -->
<div
  class="logo-strip-wrap"
  @mouseenter="isHoveringLogos = true"
  @mouseleave="isHoveringLogos = false"
>
  <div class="logo-strip">
    <div
      v-for="slot in logoSlots"
      :key="slot.id"
      class="logo-strip-tile"
      :class="{ 'is-visible': slot.visible }"
    >
      <img
        v-if="slot.school.logo"
        :src="slot.school.logo"
        :alt="slot.school.name"
        class="strip-img"
      />
      <div
        v-else
        class="strip-placeholder"
        :style="{ background: slot.school.color }"
      >
        {{ slot.school.name }}
      </div>
    </div>
  </div>
</div>
```

- [ ] **Step 4: Add logo strip CSS to `<style scoped>`**

```css
/* ── Logo strip ── */
.logo-strip-wrap {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
}

.logo-strip {
  display: flex;
  gap: 16px;
  justify-content: center;
  padding: 8px 0;
}

.logo-strip-tile {
  flex-shrink: 0;
  opacity: 0;
  transition: opacity 0.35s ease;
}
.logo-strip-tile.is-visible {
  opacity: 1;
}

.strip-placeholder {
  width: 140px;
  height: 52px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: white;
  text-align: center;
  padding: 0 8px;
  line-height: 1.2;
}
.strip-img {
  width: 140px;
  height: 52px;
  object-fit: contain;
  border-radius: 8px;
}
```

- [ ] **Step 5: Verify logo strip in the browser**

Expected:
- Row of 5 colored logo tiles appears below the testimonial section
- Every 3 seconds, the leftmost tile fades out and a new tile fades in on the right
- Hovering the strip pauses cycling
- The 14 schools cycle through infinitely

- [ ] **Step 6: Commit**

```bash
git add components/Home/SlateSchoolLogos.vue
git commit -m "feat: add logo strip to SlateSchoolLogos"
```

---

## Task 4: Responsive styles and accessibility

**Files:**
- Modify: `components/Home/SlateSchoolLogos.vue`

- [ ] **Step 1: Add responsive and accessibility CSS to `<style scoped>`**

```css
/* ── Responsive ── */
@media screen and (max-width: 767px) {
  /* Testimonial card: stack logo above quote */
  .testimonial-card {
    flex-direction: column;
    gap: 12px;
  }
  .logo-tile,
  .logo-img {
    width: 100px;
    height: 40px;
    font-size: 10px;
  }

  /* Logo strip: show only 3 tiles on mobile */
  .logo-strip-wrap {
    mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
  }
  .logo-strip {
    gap: 12px;
  }
  .logo-strip-tile:nth-child(n+4) {
    display: none;
  }
  .strip-placeholder,
  .strip-img {
    width: 100px;
    height: 40px;
    font-size: 10px;
  }
}

/* ── Accessibility: reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  /* Testimonial: disable auto-advance animation */
  .progress-bar {
    animation: none;
    width: 100%;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }

  /* Logo strip: show static row, disable opacity transitions */
  .logo-strip-tile {
    transition: none;
    opacity: 1 !important;
  }
}
```

- [ ] **Step 2: Verify responsive behavior**

Resize browser to <768px.
Expected:
- Testimonial card: logo tile stacks above the quote text
- Logo strip: only 3 tiles visible (4th and 5th hidden)
- No horizontal scroll at any width

- [ ] **Step 3: Verify reduced-motion behavior**

In browser DevTools → Rendering → Emulate CSS media feature `prefers-reduced-motion: reduce`.
Expected:
- Progress bar is full width immediately (no animation)
- Testimonial crossfade transitions are instant
- Logo strip tiles are all visible at full opacity (no fade in/out transitions)

- [ ] **Step 4: Commit**

```bash
git add components/Home/SlateSchoolLogos.vue
git commit -m "feat: add responsive styles and reduced-motion accessibility to SlateSchoolLogos"
```

---

## Task 5: Final check

- [ ] **Step 1: Restart dev server and do a full walkthrough**

Run: `yarn dev`

Check all of the following:
- Home page loads without console errors
- "60+ Slate Schools and Counting!" heading renders with green "60+" and brown text
- Testimonial card shows with colored placeholder tile, italic quote, bold name, green title
- Progress bar animates left-to-right over 10 seconds
- After 10s the card crossfades to the next school
- Clicking a dot jumps to that school and resets the progress bar
- Hovering the testimonial section pauses auto-advance (wait through a full 10s cycle while hovering to verify it doesn't advance)
- Logo strip shows 5 tiles, one fades out and one fades in every 3 seconds
- Hovering the logo strip pauses cycling
- Resize to mobile: card stacks, 3 tiles visible in strip
- No layout overflow or horizontal scroll at any width

- [ ] **Step 2: Final commit if any last adjustments were made**

```bash
git add components/Home/SlateSchoolLogos.vue
git commit -m "fix: final adjustments to SlateSchoolLogos carousel"
```

---

## Logo Swap Path (future reference)

When real horizontal logo images are available for a school, add `logo: '/img/school-logos/<school-slug>.png'` to that school's entry in the `schools` array. The component renders `<img :src="school.logo">` in place of the colored placeholder tile — no other changes needed.
