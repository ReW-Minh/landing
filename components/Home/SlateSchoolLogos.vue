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

onMounted(() => {
  startTestimonialTimer()
})

onUnmounted(() => {
  if (testimonialTimer) clearInterval(testimonialTimer)
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
</style>
