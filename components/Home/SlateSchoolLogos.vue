<template>
  <div class="slate-logos py-20">
    <!-- Heading — aligned with .container-fluid column -->
<!--    <div class="slate-logos-heading-wrap">-->
<!--      <div class="heading text-2xl md:text-3xl">-->
<!--        <span class="count">60+</span> Slate Schools and Counting!-->
<!--      </div>-->
<!--    </div>-->

    <!-- Logo carousel (Swiper) -->
    <div class="logo-strip-wrap mb-10" role="region" aria-label="Partner schools">
      <ClientOnly>
        <Swiper
            class="logo-swiper"
            :modules="swiperModules"
            :slides-per-view="2"
            :loop="true"
            :space-between="14"
            :speed="900"
            :autoplay="logoAutoplay"
            :breakpoints="logoBreakpoints"
            :watch-overflow="false"
        >
          <SwiperSlide v-for="(school, i) in logoSlides" :key="`logo-${i}-${school.name}`" class="logo-swiper-slide">
            <img
                :src="school.logo"
                :alt="school.name"
                class="strip-img"
            />
          </SwiperSlide>
        </Swiper>
        <template #fallback>
          <div class="logo-swiper-fallback" aria-hidden="true"/>
        </template>
      </ClientOnly>
    </div>

    <!-- Testimonial carousel — full width of hero section -->
    <div class="testimonial-full-bleed rounded-4xl mb-10 ">
      <div class="testimonial-section">
        <ClientOnly>
          <Swiper
              class="testimonial-swiper"
              :modules="testimonialModules"
              :loop="true"
              :autoplay="testimonialAutoplay"
              :allow-touch-move="false"
              aria-live="polite"
              effect="fade"
              :fadeEffect="{ crossFade: true }"
          >
            <SwiperSlide v-for="school in testimonialSchools" :key="school.name">
              <div class="testimonial-card rew-text-brown">
                <p class="quote text-xl md:text-2xl">"{{ school.testimonial!.quote }}"</p>
                <div class="attribution text-lg">
                  <span class="person-title">{{ school.testimonial!.person }} | {{ school.testimonial!.title }}</span>
                  <span class="school-name">{{ school.name }}</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css/effect-fade'
import { computed, onMounted, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import { TESTIMONIALS } from '~/utils/constant'

const swiperModules = [Autoplay]
const testimonialModules = [Autoplay, EffectFade]

const logoBreakpoints = {
  480: { slidesPerView: 3 },
  768: { slidesPerView: 4, spaceBetween: 20 },
  1024: { slidesPerView: 5, spaceBetween: 24 }
}

const prefersReducedMotion = ref(false)


const logoAutoplay = computed(() => {
  if (prefersReducedMotion.value) return false
  return {
    delay: 2800,
    disableOnInteraction: false,
    reverseDirection: true
  }
})

const testimonialSchools = TESTIMONIALS.filter(s => s.testimonial)
const logoSlides = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]

const testimonialAutoplay = computed(() => {
  if (prefersReducedMotion.value) return false
  return { delay: 10000, disableOnInteraction: false }
})

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
</script>

<style scoped>
.slate-logos {
  --logo-tile-w: 168px;
  --logo-tile-h: 72px;
  width: 100%;
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
  box-sizing: border-box;
  border-radius: 16px;
  padding: 28px clamp(16px, 4vw, 64px) 22px;
}

.testimonial-section {
  width: 100%;
  max-width: min(1200px, 100%);
  margin: 0 auto;
}

.testimonial-swiper {
  min-height: 140px;
}

.testimonial-swiper :deep(.swiper-slide) {
  margin: auto;
}

.testimonial-card {
  text-align: center;
  padding: 16px 4px;
  width: 100%;
}

.quote {
  font-style: italic;
  line-height: 1.65;
  margin: 0 auto 24px;
  max-width: 100%;
}

.attribution {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.person-title {
  font-weight: 600;
}

.school-name {
  font-weight: 400;
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

.logo-swiper-slide {
  height: var(--logo-tile-h);
  box-sizing: border-box;
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

@media screen and (max-width: 767px) {
  .slate-logos {
    --logo-tile-w: 118px;
    --logo-tile-h: 64px;
  }

  .testimonial-swiper {
    min-height: 160px;
  }
}
</style>
