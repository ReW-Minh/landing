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

interface Testimonial {
  quote: string
  person: string
  title: string
}

interface School {
  name: string
  logo: string
  testimonial?: Testimonial
}

const schools: School[] = [
  {
    name: 'Loyola Law School',
    logo: '/img/schools/lls.png',
    testimonial: {
      quote: 'Well, the team is amazing. I trust them with anything Slate-related! ReWorkflow isn’t a transactional business model, they’re very, very customer service-oriented and very responsive. I\'m just grateful to the entire team for making our lives easier. I truly don\'t think ReWorkflow could get enough praise.',
      person: 'Mina Mizutani',
      title: 'Assistant Director, JD Admissions'
    }
  },
  {
    name: 'City Tech, CUNY',
    logo: '/img/schools/citytech.png',
    testimonial: {
      quote: 'The staff we work with at ReWorkflow, there’s no other company that can match their value. They’re very can-do, very friendly, very approachable—almost instant connectivity with the team. They understand our admissions process and the application journey as well as Slate’s nuts and bolts. They really know their stuff. It’s just a pleasure working with them!',
      person: 'John Albanese',
      title: 'Director of Admissions and Recruitment'
    }
  },
  {
    name: 'Marymount Manhattan College',
    logo: '/img/schools/mmc.png',
    testimonial: {
      quote: "I love working with the team at ReWorkflow! They’re good at communication, I can rely on whoever I’m working with, and they’re very knowledgeable in the field. They all have good critical thinking skills and apply extra thought to projects, and suggest best practice improvements that are very helpful. It’s not just a tick-the-box relationship. Basically, ReWorkflow is my secret weapon.",
      person: 'Sunay Tamashev',
      title: 'Director of Enrollment Marketing'
    }
  },
  {
    name: 'NYU School of Professional Studies',
    logo: '/img/schools/nyu.png',
    testimonial: {
      quote: "ReWorkflow has the feeling of “my expert friend is helping me.” With everyone on the team, we feel really supported. And we’ve learned so much from ReWorkflow’s people because they don’t just do it for you, they explain why. We’ve come so far as an organization since we’ve partnered with them, because it really has felt like we have an extra set of hands which is crucial in higher ed when it feels like you’re always trying to do more things without enough resources. We couldn’t be happier with our ReWorkflow partnership.",
      person: 'Sara Edmunds',
      title: 'Assistant Dean, Administration & Strategy'
    }
  },
  {
    name: 'Paul Smith’s College',
    logo: '/img/schools/ps.png',
    testimonial: {
      quote: 'So I am an organizer, an executor, a developer, an enhancer—a team of one— with limited bandwidth supporting all of the admissions departments across the school, as well as senior administration for reporting. My time for troubleshooting Slate and understanding new enhancements is limited. ReWorkflow came in with a listening ear, understood my challenges, and provided me with very supportive team members. They understand the nuances of Slate, and really helped me understand where the friction points are, and what to do about them. Everyone I’ve communicated with makes me feel like I’m not just a client, but also part of the bigger ReWorkflow organization, which is a really nice partner relationship.',
      person: 'Director of Enrollment Operations, Interim Director of Admissions',
      title: 'Associate Director of Admissions'
    }
  },
  {
    name: 'University of Alabama, Huntsville',
    logo: '/img/schools/uah.png',
    testimonial: {
      quote: 'Since implementing Slate with ReWorkflow’s help, we have seen a drastic difference in processing times for students submitting an application, and the time it takes us to review it and communicate a decision. We have been processing way more quickly this year, and our enrollment numbers are reflecting that. And the team is not just knowledgeable about Slate. They\'re also knowledgeable about how an admissions operation runs, and how it could run more efficiently. So they’re also helping us work through what our business process could be, and it’s extremely valuable.',
      person: 'Haley Kennedy',
      title: 'Director of Admissions Operations'
    }
  },
  {
    name: 'JM Partner Solutions',
    logo: 'https://static.wixstatic.com/media/7cb5bc_9f00498cca45490c9a1f6697f2074d8b~mv2.png',
    testimonial: {
      quote: 'We have recommended a lot of clients to ReWorkflow because they do great work and exceed our clients’ expectations, every time. The team is smart. They understand the system. And they\'re able to get in and either create the reports, write the trigger, or fix the issue with the system to get it so that it\'s functioning, and the campus isn\'t having to do manual workarounds. ReWorkflow has been very good at focusing on what the client needs are, and the team does what they say they will.',
      person: 'Jessica Mireles',
      title: 'Founder & President'
    }
  }
]

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

const testimonialSchools = schools.filter(s => s.testimonial)
const logoSlides = [...schools, ...schools, ...schools]

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
