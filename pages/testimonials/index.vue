<script setup lang="ts">
import { TESTIMONIALS } from '~/utils/constant'

useHead({
  title: 'ReWorkflow - Testimonials'
})

</script>

<template>
  <BasePageContainer>
    <img src="/img/logo-bg.svg" alt="rew"
         class="bg-logo !fixed !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 invisible md:visible mt-[150px]">

    <BasePageHeader>
      Hear directly from our partners

      <template #subtitle>
        What it’s like to build and enhance Slate ecosystems with <span class="rew-text-brown"><span class="rew-text-green">Re</span>Workflow</span>
      </template>
    </BasePageHeader>

    <BasePageContent max-width="1400">

      <!-- Testimonial cards -->
      <div class="grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-10">
        <div
            v-for="school in TESTIMONIALS.filter(school => school.testimonial)"
            :key="`${school.name}-${school.testimonial?.person}`"
            class="border rounded-2xl bg-white/30 backdrop-blur-sm shadow col-span-6 md:col-span-3">

          <!-- Content -->
          <div class="card !m-0 !p-6 h-full flex flex-col items-center justify-between gap-4"
               style="text-align: left;">
            <p
                class="rew-text-brown leading-relaxed mb-3 text-left text-xl whitespace-pre-line"
                v-html="`&quot;${decorateText(school.testimonial?.quote || '', true)}&quot;`"
            >
            </p>

            <!-- Attribution -->
            <div class="w-full text-left text-lg rew-text-brown">
              <div class="rew-text-green">{{ school.testimonial?.person }}</div>
              <div>{{ school.testimonial?.title }}</div>
              <div class="font-bold ">{{ school.name }}</div>
            </div>
          </div>
        </div>
      </div>

    </BasePageContent>
  </BasePageContainer>
</template>
