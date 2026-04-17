<template>
  <div class="slate-logos">
    <!-- Heading — aligned with .container-fluid column -->
    <div class="slate-logos-heading-wrap">
      <div class="heading text-2xl md:text-3xl">
        <span class="count">60+</span> Slate Schools and Counting!
      </div>
    </div>

    <!-- Testimonial carousel — full width of hero section -->
    <div
      class="testimonial-full-bleed"
      @mouseenter="isHoveringTestimonial = true"
      @mouseleave="isHoveringTestimonial = false"
    >
      <div class="testimonial-section">
        <div class="testimonial-card-wrap">
          <Transition name="fade" mode="out-in">
            <div class="testimonial-card" :key="testimonialIndex" aria-live="polite">
              <p class="quote">"{{ currentSchool().testimonial!.quote }}"</p>
              <div class="attribution">
                <span class="person-title">
                  {{ currentSchool().testimonial!.person }}, {{ currentSchool().testimonial!.title }}
                </span>
                <span class="school-name">{{ currentSchool().name }}</span>
              </div>
            </div>
          </Transition>
        </div>

      </div>
    </div>

    <!-- Logo carousel (Swiper) -->
    <div class="logo-strip-wrap" role="region" aria-label="Partner schools">
      <ClientOnly>
        <Swiper
          class="logo-swiper"
          :modules="swiperModules"
          :slides-per-view="'auto'"
          :loop="true"
          :space-between="14"
          :speed="900"
          :autoplay="logoAutoplay"
          :breakpoints="logoBreakpoints"
          :watch-overflow="false"
        >
          <SwiperSlide v-for="(school, i) in schools" :key="`logo-${i}-${school.name}`" class="logo-swiper-slide">
            <img
              v-if="school.logo"
              :src="school.logo"
              :alt="school.name"
              class="strip-img"
            />
            <div
              v-else
              class="strip-placeholder"
              :style="{ background: school.color }"
            >
              {{ school.initials }}
            </div>
          </SwiperSlide>
        </Swiper>
        <template #fallback>
          <div class="logo-swiper-fallback" aria-hidden="true" />
        </template>
      </ClientOnly>
    </div>

    <!-- Treeline — bridges into footer -->
    <div class="treeline-strip" aria-hidden="true">
      <img src="/img/treeline.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

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

const schools: School[] = [
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
  { name: 'Stanford University', initials: 'SU', color: '#8C1515' },
  { name: 'Georgetown University', initials: 'GU', color: '#041E42' },
  { name: 'University of Michigan', initials: 'UM', color: '#00274C' },
  { name: 'New York University', initials: 'NYU', color: '#57068C' },
  { name: 'Northeastern University', initials: 'NEU', color: '#C8102E' },
  { name: 'Loyola University Chicago', initials: 'LUC', color: '#832E2D' },
  { name: 'Fordham University', initials: 'FU', color: '#811B24' },
  { name: 'DePaul University', initials: 'DPU', color: '#23417A' },
]

const swiperModules = [Autoplay]

const logoBreakpoints = {
  768: { spaceBetween: 20 },
}

const prefersReducedMotion = ref(false)


const logoAutoplay = computed(() => {
  if (prefersReducedMotion.value) return false
  return {
    delay: 2800,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    reverseDirection: true,
  }
})

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


onMounted(() => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  startTestimonialTimer()
})

onUnmounted(() => {
  if (testimonialTimer) clearInterval(testimonialTimer)
})
</script>

<style scoped>
.slate-logos {
  --logo-tile-w: 168px;
  --logo-tile-h: 62px;
  padding: 24px 0 0;
  width: 100%;
  background: #f5f0e4;
}

.slate-logos-heading-wrap {
  max-width: 1488px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

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

.testimonial-full-bleed {
  width: 100%;
  box-sizing: border-box;
  background: #2e2219;
  padding: 28px clamp(16px, 4vw, 64px) 22px;
  margin-bottom: 28px;
}

.testimonial-section {
  width: 100%;
  max-width: min(1200px, 100%);
  margin: 0 auto;
}

.testimonial-card-wrap {
  min-height: 120px;
}

.testimonial-card {
  text-align: center;
  padding: 8px 0 4px;
  min-height: 120px;
}

.quote {
  font-style: italic;
  color: #e8d9c8;
  font-size: clamp(1.125rem, 2.35vw, 1.5rem);
  line-height: 1.65;
  margin: 0 auto 16px;
  max-width: 100%;
}
.attribution {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.person-title {
  font-weight: 700;
  font-size: clamp(0.9375rem, 1.35vw, 1rem);
  color: #f0e6d8;
}
.school-name {
  font-size: clamp(0.875rem, 1.2vw, 0.9375rem);
  font-weight: 600;
  color: #b89070;
  letter-spacing: 0.02em;
}


.logo-strip-wrap {
  width: 100%;
  max-width: 1488px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  box-sizing: border-box;
}

.logo-swiper {
  overflow: visible;
  padding: 10px 0;
}

.logo-swiper-slide {
  width: var(--logo-tile-w);
  height: var(--logo-tile-h);
  box-sizing: border-box;
}

.strip-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 900;
  color: white;
  text-align: center;
  padding: 0 10px;
  line-height: 1.2;
}
.strip-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
}

.logo-swiper-fallback {
  min-height: calc(var(--logo-tile-h) + 20px);
}

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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 767px) {
  .slate-logos {
    --logo-tile-w: 118px;
    --logo-tile-h: 46px;
  }

  .testimonial-card {
    min-height: 140px;
  }
  .testimonial-card-wrap {
    min-height: 140px;
  }

  .strip-placeholder {
    font-size: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }
}
</style>
