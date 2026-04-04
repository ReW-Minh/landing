# Slate Schools Testimonials Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Slate Schools" nav item and create a `/slate-schools` page displaying school-grouped testimonials with left-accent cards.

**Architecture:** Static testimonial data is defined inline in the page as a typed array of `SchoolGroup` objects. The page uses the existing default layout (Header + Footer) and existing base components (`BasePageContainer`, `BasePageHeader`, `BasePageContent`, `CallToAction`). No new components or API calls are needed.

**Tech Stack:** Nuxt 3, Vue 3 (Composition API `<script setup>`), Tailwind CSS, TypeScript

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Modify | `utils/constant.ts` | Add `Slate Schools` entry to `NAVIGATION_MENU` |
| Create | `pages/slate-schools/index.vue` | New page: header, school-grouped testimonials, CTA |

---

### Task 1: Add "Slate Schools" to the navigation

**Files:**
- Modify: `utils/constant.ts`

- [ ] **Step 1: Add the nav entry**

Open `utils/constant.ts`. The `NAVIGATION_MENU` array currently ends with the `About` entry. Add `Slate Schools` before `About` (between `Podcast` and `About`):

```ts
// utils/constant.ts  — only the NAVIGATION_MENU array shown, existing entries unchanged
export const NAVIGATION_MENU = [
    {
        label: 'Services',
        route: '/services'
    },
    {
        label: 'Pricing',
        route: '/pricing'
    },
    {
        label: 'ReSources',
        items: [
            {
                label: 'Slate',
                route: 'https://resource.reworkflow.com/books/slate',
                external: true
            },
            {
                label: 'PowerCampus',
                route: 'https://resource.reworkflow.com/books/powercampus',
                external: true
            },
            {
                label: 'Our Trusted Partners',
                route: '/resources/trusted-partners'
            }
        ]
    },
    {
        label: 'Podcast',
        route: '/podcast'
    },
    {
        label: 'Slate Schools',
        route: '/slate-schools'
    },
    {
        label: 'About',
        route: '/about',
        items: [
            {
                label: 'Mission',
                route: '/about#mission'
            },
            {
                label: 'Values',
                route: '/about#values'
            },
            {
                label: 'Our Team',
                route: '/about#team'
            }
        ]
    }
]
```

- [ ] **Step 2: Verify in the browser**

Run `yarn dev` (port 8000). Open http://localhost:8000. Confirm "Slate Schools" appears in the desktop nav bar and in the mobile drawer. Clicking it will 404 for now — that's expected.

- [ ] **Step 3: Commit**

```bash
git add utils/constant.ts
git commit -m "feat: add Slate Schools to navigation menu"
```

---

### Task 2: Create the Slate Schools page

**Files:**
- Create: `pages/slate-schools/index.vue`

- [ ] **Step 1: Create the file with data types and placeholder testimonials**

```vue
<!-- pages/slate-schools/index.vue -->
<script setup lang="ts">
useHead({
  title: 'ReWorkflow - Slate Schools'
})

interface Testimonial {
  name: string
  title: string
  quote: string
}

interface SchoolGroup {
  school: string
  initials: string
  color: string
  testimonials: Testimonial[]
}

const schools: SchoolGroup[] = [
  {
    school: 'Boston University',
    initials: 'BU',
    color: '#4E6C3C',
    testimonials: [
      {
        name: 'Jane Smith',
        title: 'Director of Admissions',
        quote: 'ReWorkflow has completely transformed how our admissions office leverages Slate. Their team\'s responsiveness and depth of knowledge is unlike anything we\'ve experienced with an outside partner. We would not trust anyone else with our Slate environment.'
      },
      {
        name: 'John Doe',
        title: 'Enrollment Systems Manager',
        quote: 'The cycle prep support alone saved us weeks of work going into application season. ReWorkflow\'s expertise is unmatched and their team feels like a true extension of our own staff.'
      }
    ]
  },
  {
    school: 'MIT',
    initials: 'MIT',
    color: '#433129',
    testimonials: [
      {
        name: 'Sarah Lee',
        title: 'VP of Enrollment',
        quote: 'Highly recommend ReWorkflow to any institution looking to get more out of Slate. They are true partners who understand our goals, not just vendors. Working with them has been a game-changer for our enrollment operations.'
      }
    ]
  }
]

function initials(name: string): string {
  return name.split(' ').map(p => p[0]).join('').toUpperCase().slice(0, 2)
}
</script>

<template>
  <BasePageContainer>
    <BasePageHeader>
      Slate Schools

      <template #subtitle>
        Hear from the admissions and enrollment professionals at institutions across the country who rely on ReWorkflow to power their Slate operations.
      </template>
    </BasePageHeader>

    <BasePageContent>
      <!-- School groups -->
      <div v-for="group in schools" :key="group.school" class="space-y-4">

        <!-- School header row -->
        <div class="flex items-center gap-3">
          <div
            class="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
            :style="{ background: group.color }"
          >
            {{ group.initials }}
          </div>
          <span class="font-bold text-base rew-text-brown">{{ group.school }}</span>
          <div class="flex-1 border-t border-[#C8CEC6]"></div>
        </div>

        <!-- Testimonial cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="testimonial in group.testimonials"
            :key="testimonial.name"
            class="bg-white/60 backdrop-blur-sm rounded-xl shadow flex overflow-hidden"
          >
            <!-- Left accent bar -->
            <div class="w-[5px] flex-shrink-0 bg-[var(--rew-primary-green)]"></div>

            <!-- Content -->
            <div class="flex-1 p-[14px_14px_14px_12px]">
              <p class="italic rew-text-brown leading-relaxed mb-3 text-sm">
                "{{ testimonial.quote }}"
              </p>

              <!-- Attribution -->
              <div class="flex items-center gap-2">
                <div
                  class="w-7 h-7 rounded-full flex items-center justify-center text-white text-[9px] font-black flex-shrink-0"
                  style="background: var(--rew-secondary-green)"
                >
                  {{ initials(testimonial.name) }}
                </div>
                <div>
                  <div class="font-bold text-xs rew-text-brown">{{ testimonial.name }}</div>
                  <div class="text-[11px] text-[var(--rew-secondary-green)]">{{ testimonial.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- CTA -->
      <div class="flex flex-col items-center gap-3 pt-4">
        <p class="italic text-sm text-[var(--rew-secondary-green)]">
          Join the 60+ schools trusting ReWorkflow with their Slate operations.
        </p>
        <CallToAction label="Contact Us" :internal="true" />
      </div>
    </BasePageContent>
  </BasePageContainer>
</template>
```

- [ ] **Step 2: Verify in the browser**

With `yarn dev` running, navigate to http://localhost:8000/slate-schools. Confirm:
- Page title is "ReWorkflow - Slate Schools"
- Header shows "Slate Schools" with the italic subtitle
- Boston University group shows two testimonial cards side-by-side on desktop, stacked on mobile
- MIT group shows one card (not stretched to fill the row — single card sits in column 1)
- Each card has the full-height green left accent bar
- Attribution shows initials avatar, name, and title
- CTA "Contact Us" button is centered below testimonials
- Clicking "Contact Us" goes to `/contact`
- Nav item "Slate Schools" is active/highlighted

- [ ] **Step 3: Commit**

```bash
git add pages/slate-schools/index.vue
git commit -m "feat: add Slate Schools testimonials page"
```
