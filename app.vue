<template>
  <NuxtLoadingIndicator />
  <ClientOnly>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ClientOnly>
  <Toast />
</template>

<script setup lang="ts">
import 'primeicons/primeicons.css'

useHead({
  title: 'ReWorkflow',
  meta: [
    { name: 'description', content: 'Slate Support Staffing and Solutions' }
  ],
  script: [
    {
      'src': 'https://plausible.io/js/script.hash.outbound-links.js',
      'data-domain': 'reworkflow.com',
      'defer': true
    },
    {
      'type': 'text/javascript',
      'innerHTML': `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`
    }
  ]
})

useSeoMeta({
  title: 'ReWorkflow',
  ogTitle: 'ReWorkflow',
  description: 'Slate Support Staffing and Solutions',
  ogDescription: 'Slate Support Staffing and Solutions',
})
</script>

<style>
@font-face {
  font-family: 'Ondo Medium';
  src: local('Ondo Medium'), url('/fonts/OndoMedium.otf') format('truetype');
}

.rew-font {
  @apply !not-italic;

  font-family: 'Ondo Medium', sans-serif !important;
  font-weight: 500 !important;
}
</style>
