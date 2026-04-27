<script setup lang="ts">
import { TESTIMONIALS } from '~/utils/constant'

useHead({
  title: 'ReWorkflow - Slate Schools'
})

</script>

<template>
  <BasePageContainer>
    <img src="/img/logo-bg.svg" alt="rew"
         class="bg-logo !fixed !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 invisible md:visible mt-[150px]">

    <BasePageHeader>
      Slate Schools

      <template #subtitle>
        Hear directly from fellow admissions and student services teams about what it’s like to build and enhance their
        Slate ecosystems together.
      </template>
    </BasePageHeader>

    <BasePageContent>

      <!-- Testimonial cards -->
      <div class="grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-10">
        <div
            v-for="school in TESTIMONIALS"
            :key="`${school.name}-${school.testimonial?.person}`"
            class="border rounded-2xl bg-white/30 backdrop-blur-sm shadow col-span-6 md:col-span-3">

          <!-- Content -->
          <div class="card !m-0 !p-6 h-full flex flex-col items-center justify-between gap-6 md:gap-0" style="text-align: left;">
            <p class="italic rew-text-brown leading-relaxed mb-3 text-left">
              "{{ school.testimonial?.quote }}"
            </p>

            <!-- Attribution -->
            <div class="w-full text-left">
              <div class="font-bold text-xs rew-text-green">{{ school.testimonial?.person }}</div>
              <div class="text-[11px] ">{{ school.testimonial?.title }}</div>
              <div>{{ school.name }}</div>
            </div>
          </div>
        </div>
      </div>


      <!-- CTA -->
      <div class="flex flex-col items-center gap-3 pt-4">
        <p class="italic text-lg font-bold rew-text-brown">
          Join the <span class="rew-text-green">60+ schools</span> trusting <span class="rew-font"><span
            class="rew-text-green">Re</span>Workflow</span> with their Slate operations.
        </p>
        <CallToAction label="Contact Us" :internal="true"/>
      </div>
    </BasePageContent>
  </BasePageContainer>
</template>
