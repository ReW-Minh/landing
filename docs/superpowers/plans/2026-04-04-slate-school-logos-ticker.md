# Slate School Logos Ticker Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the placeholder `SlateSchoolLogos.vue` with a two-row infinite CSS ticker showing partner Slate school logos.

**Architecture:** Single self-contained Vue component with a static schools array, pure CSS `@keyframes` animation (no Swiper), and a seamless loop via duplicated DOM items. Row 1 has a static header + name pills; Row 2 has logo-only circles with an inline "60+" badge.

**Tech Stack:** Vue 3 (script setup), Nuxt 3, scoped CSS (no Tailwind needed for animation), TypeScript

---

### Task 1: Replace SlateSchoolLogos.vue with the two-row ticker

**Files:**
- Modify: `components/Home/SlateSchoolLogos.vue`

- [ ] **Step 1: Write the full component**

Replace the entire contents of `components/Home/SlateSchoolLogos.vue` with:

```vue
<template>
  <div class="slate-logos">

    <!-- Row 1: static header + logo+name pill ticker -->
    <div class="row1-header">
      <span class="count">60+</span> Slate Schools and Counting!
    </div>
    <div class="ticker-wrap">
      <div class="ticker-track row1-track">
        <template v-for="n in 2" :key="n">
          <div v-for="school in schools" :key="`r1-${n}-${school.initials}`" class="pill">
            <div v-if="!school.logo" class="logo-circle" :style="{ background: school.color }">
              {{ school.initials }}
            </div>
            <img v-else :src="school.logo" :alt="school.name" class="logo-img-sm" />
            <span>{{ school.name }}</span>
          </div>
        </template>
      </div>
    </div>

    <!-- Row 2: logo-only ticker with inline "60+" badge -->
    <div class="ticker-wrap ticker-wrap--row2">
      <div class="ticker-track row2-track">
        <template v-for="n in 2" :key="n">
          <div class="count-badge">
            <span class="num">60+</span> Slate Schools and Counting!
          </div>
          <div class="divider"></div>
          <div v-for="school in schools" :key="`r2-${n}-${school.initials}`" class="logo-only" :style="!school.logo ? { background: school.color } : {}">
            <img v-if="school.logo" :src="school.logo" :alt="school.name" class="logo-img-lg" />
            <span v-else>{{ school.initials }}</span>
          </div>
          <div class="divider"></div>
        </template>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
interface School {
  name: string
  initials: string
  color: string
  logo?: string
}

const schools: School[] = [
  { name: 'Boston University', initials: 'BU', color: '#4E6C3C' },
  { name: 'MIT', initials: 'MIT', color: '#00669E' },
  { name: 'Stanford', initials: 'SU', color: '#8F4A2C' },
  { name: 'Yale', initials: 'YU', color: '#768471' },
  { name: 'Columbia', initials: 'CU', color: '#433129' },
  { name: 'Duke', initials: 'DU', color: '#4E6C3C' },
  { name: 'NYU', initials: 'NY', color: '#00669E' },
  { name: 'Brown', initials: 'BN', color: '#8F4A2C' },
  { name: 'Princeton', initials: 'PR', color: '#768471' },
  { name: 'Notre Dame', initials: 'ND', color: '#433129' },
]
</script>

<style scoped>
/* ── Layout ── */
.slate-logos {
  padding: 24px 0 8px;
  overflow: hidden;
}

.row1-header {
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: #433129;
  letter-spacing: 0.02em;
  margin-bottom: 14px;
}
.row1-header .count {
  color: #4E6C3C;
  font-size: 17px;
}

/* ── Ticker wrapper (clips + fades edges) ── */
.ticker-wrap {
  overflow: hidden;
  width: 100%;
  mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
  margin-bottom: 18px;
}
.ticker-wrap--row2 {
  margin-bottom: 0;
}

/* ── Scrolling track ── */
.ticker-track {
  display: flex;
  align-items: center;
  width: max-content;
}
.row1-track {
  animation: ticker 22s linear infinite;
}
.row2-track {
  animation: ticker 26s linear infinite;
}
@keyframes ticker {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ── Row 1: pill ── */
.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: white;
  border-radius: 40px;
  padding: 8px 18px 8px 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.09);
  font-size: 12px;
  font-weight: 700;
  color: #433129;
  white-space: nowrap;
  flex-shrink: 0;
  margin-right: 14px;
}
.logo-circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 900;
  color: white;
  flex-shrink: 0;
  letter-spacing: -0.5px;
}
.logo-img-sm {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: contain;
  flex-shrink: 0;
}

/* ── Row 2: logo-only circle ── */
.logo-only {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 900;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);
  margin-right: 20px;
  letter-spacing: -0.5px;
}
.logo-img-lg {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

/* ── Row 2: inline count badge ── */
.count-badge {
  display: inline-flex;
  align-items: center;
  background: #4E6C3C;
  color: white;
  border-radius: 40px;
  padding: 9px 22px;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  flex-shrink: 0;
  margin-right: 20px;
}
.count-badge .num {
  font-size: 16px;
  font-weight: 900;
  margin-right: 6px;
}

/* ── Divider between badge and logos ── */
.divider {
  width: 1px;
  height: 32px;
  background: #C8CEC6;
  margin-right: 20px;
  flex-shrink: 0;
}

/* ── Responsive ── */
@media screen and (max-width: 767px) {
  .ticker-wrap {
    mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
  }
  .logo-circle {
    width: 22px;
    height: 22px;
    font-size: 8px;
  }
  .logo-img-sm {
    width: 22px;
    height: 22px;
  }
  .pill {
    font-size: 10px;
    padding: 6px 14px 6px 6px;
    margin-right: 10px;
  }
  .logo-only {
    width: 34px;
    height: 34px;
    font-size: 9px;
    margin-right: 14px;
  }
  .logo-img-lg {
    width: 24px;
    height: 24px;
  }
}

/* ── Accessibility: stop animation for users who prefer reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .ticker-track {
    animation: none;
  }
}
</style>
```

- [ ] **Step 2: Start the dev server and visually verify**

```bash
yarn dev
```

Open http://localhost:8000 and check:
- Row 1: "60+ Slate Schools and Counting!" header centered above ticker, "60+" is green
- Row 1 ticker: white pills with colored initials circles + school names scrolling left continuously
- Row 2: logo-only circles scrolling left, green "60+ Slate Schools and Counting!" badge appears inline, dividers flank the badge
- No visible jump/seam in the loop on either row
- Row 2 scrolls visibly slower than Row 1
- Both rows fade out at left/right edges
- Resize to mobile width (< 768px): circles and pills are smaller, everything still scrolls

- [ ] **Step 3: Commit**

```bash
git add components/Home/SlateSchoolLogos.vue
git commit -m "feat: implement two-row infinite school logo ticker"
```
