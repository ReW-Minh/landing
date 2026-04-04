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

function getPersonInitials(name: string): string {
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
          <div class="flex-1 border-t border-[var(--rew-baby-grey)]"></div>
        </div>

        <!-- Testimonial cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="testimonial in group.testimonials"
            :key="`${group.school}-${testimonial.name}`"
            class="bg-white/60 backdrop-blur-sm rounded-xl shadow flex overflow-hidden"
          >
            <!-- Left accent bar -->
            <div class="w-[5px] flex-shrink-0 bg-[var(--rew-primary-green)]"></div>

            <!-- Content -->
            <div class="flex-1 p-[14px] pl-3">
              <p class="italic rew-text-brown leading-relaxed mb-3 text-sm">
                "{{ testimonial.quote }}"
              </p>

              <!-- Attribution -->
              <div class="flex items-center gap-2">
                <div
                  class="w-7 h-7 rounded-full flex items-center justify-center text-white text-[9px] font-black flex-shrink-0"
                  style="background: var(--rew-secondary-green)"
                >
                  {{ getPersonInitials(testimonial.name) }}
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
