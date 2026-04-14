<template>
  <div class="slate-logos">
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
      <!-- Fixed-height wrapper prevents layout jumps when testimonial heights differ -->
      <div class="testimonial-card-wrap">
        <Transition name="fade" mode="out-in">
          <div class="testimonial-card" :key="testimonialIndex" aria-live="polite">
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
                {{ currentSchool().initials }}
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
      </div>

      <!-- Progress bar — :key resets the CSS animation on each advance -->
      <div class="progress-track">
        <div class="progress-bar" :key="`pb-${testimonialIndex}`"></div>
      </div>

      <!-- Dot indicators -->
      <div class="dots" role="tablist" aria-label="Testimonial navigation">
        <button
          type="button"
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

    <!-- Logo Strip -->
    <div
      class="logo-strip-wrap"
      role="region"
      aria-label="Partner schools"
      @mouseenter="isHoveringLogos = true"
      @mouseleave="isHoveringLogos = false"
    >
      <!-- Fixed-width scroller centers the strip and clips entering/leaving tiles -->
      <div class="logo-strip-scroller">
        <TransitionGroup name="logo-slide" tag="div" class="logo-strip">
          <div
            v-for="slot in logoSlots"
            :key="slot.id"
            class="logo-strip-tile"
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
              {{ slot.school.initials }}
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
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
}

const VISIBLE_LOGOS = 5

const schools: School[] = [
  // --- Schools with testimonials ---
  {
    name: 'Ouachita Baptist University',
    initials: 'OBU',
    color: '#4A2572',
    // TODO: replace with real approved attribution
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
    // TODO: replace with real approved attribution
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
    // TODO: replace with real approved attribution
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
    // TODO: replace with real approved attribution
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
    // TODO: replace with real approved attribution
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
    // TODO: replace with real approved attribution
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

// ── Logo strip ────────────────────────────────────────────────────────────

let slotIdCounter = VISIBLE_LOGOS
let nextSchoolIndex = VISIBLE_LOGOS
const isHoveringLogos = ref(false)

const logoSlots = ref<LogoSlot[]>(
  schools.slice(0, VISIBLE_LOGOS).map((school, i) => ({ id: i, school }))
)

// Brief cooldown flag to prevent concurrent advances
let isAdvancing = false

function advanceLogo() {
  if (isAdvancing) return
  isAdvancing = true
  logoSlots.value.shift()
  logoSlots.value.push({
    id: slotIdCounter++,
    school: schools[nextSchoolIndex % schools.length]
  })
  nextSchoolIndex++
  setTimeout(() => { isAdvancing = false }, 500)
}

let logoTimer: ReturnType<typeof setInterval> | null = null

function startLogoTimer() {
  if (logoTimer) clearInterval(logoTimer)
  logoTimer = setInterval(() => {
    if (!isHoveringLogos.value) advanceLogo()
  }, 3000)
}

onMounted(() => {
  startTestimonialTimer()
  startLogoTimer()
})

onUnmounted(() => {
  if (testimonialTimer) clearInterval(testimonialTimer)
  if (logoTimer) clearInterval(logoTimer)
})
</script>

<style scoped>
.slate-logos {
  padding: 24px 0 8px;
}

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

/* Prevents layout jumps: cards of different heights won't reflow the page */
.testimonial-card-wrap {
  min-height: 130px;
}

.testimonial-card {
  /* Soft frosted look — blends with the page gradient instead of floating white card */
  background: rgba(255, 255, 255, 0.45);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  min-height: 130px;
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
  font-size: 14px;
  font-weight: 900;
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
.testimonial-section:hover .progress-bar {
  animation-play-state: paused;
}

/* Dots */
.dots {
  display: flex;
  justify-content: center;
  gap: 0;
  align-items: center;
}
/* 44px touch target with transparent bg; visual dot via ::after */
.dot {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dot::after {
  content: '';
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #C8CEC6;
  transition: background 0.2s, transform 0.2s;
}
.dot.active::after {
  background: #4E6C3C;
  transform: scale(1.25);
}
.dot:focus-visible {
  outline: 2px solid #4E6C3C;
  outline-offset: -17px;
}

/* ── Logo strip ── */
.logo-strip-wrap {
  /* hover listener container */
}

/*
 * Fixed-width centered scroller. The overflow:hidden clips tiles that are
 * entering from the right or exiting to the left during the slide animation.
 * The mask-image fades the edge tiles into the page background.
 *
 * Width = 5 tiles × 140px + 4 gaps × 16px = 764px
 */
.logo-strip-scroller {
  width: 764px;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
}

/*
 * position:relative is required so that Vue's TransitionGroup can absolutely-
 * position the leaving tile in place while the remaining tiles FLIP into their
 * new positions — producing a true conveyor-belt slide.
 */
.logo-strip {
  position: relative;
  display: flex;
  gap: 16px;
  padding: 8px 0;
}

.logo-strip-tile {
  flex-shrink: 0;
  position: relative;
  z-index: 1; /* renders above the absolutely-positioned leaving tile */
}

.strip-placeholder {
  width: 140px;
  height: 52px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 900;
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

/* Testimonial fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/*
 * Logo strip conveyor-belt slide via Vue TransitionGroup + FLIP:
 *   - logo-slide-move    : remaining tiles slide left to their new positions (FLIP)
 *   - logo-slide-leave-* : departing tile fades out to the left (position:absolute,
 *                          taken out of flow so FLIP can calculate shifts correctly)
 *   - logo-slide-enter-* : new tile fades in from the right
 *
 * translateX(156px) = one tile width (140px) + one gap (16px)
 */
.logo-slide-move {
  transition: transform 0.4s ease;
}
.logo-slide-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.logo-slide-enter-from {
  opacity: 0;
  transform: translateX(156px);
}
.logo-slide-leave-active {
  position: absolute;
  z-index: 0;
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.logo-slide-leave-to {
  opacity: 0;
  transform: translateX(-156px);
}

/* ── Responsive ── */
@media screen and (max-width: 767px) {
  /* Testimonial card: stack logo above quote */
  .testimonial-card {
    flex-direction: column;
    gap: 12px;
    min-height: 160px;
  }
  .testimonial-card-wrap {
    min-height: 160px;
  }
  .logo-tile,
  .logo-img {
    width: 100px;
    height: 40px;
    font-size: 10px;
  }

  /*
   * Mobile scroller: show 3 tiles — 3 × 100px + 2 × 16px = 332px
   * translateX for enter/leave matches mobile tile+gap = 116px
   */
  .logo-strip-scroller {
    width: 332px;
    mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
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
  .logo-slide-enter-from {
    transform: translateX(116px);
  }
  .logo-slide-leave-to {
    transform: translateX(-116px);
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

  /* Logo strip: disable all slide/move transitions */
  .logo-slide-move,
  .logo-slide-enter-active,
  .logo-slide-leave-active {
    transition: none !important;
  }
  .logo-slide-enter-from,
  .logo-slide-leave-to {
    opacity: 1;
    transform: none;
  }
}
</style>
