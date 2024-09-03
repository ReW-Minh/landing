<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Toast />
</template>

<script setup>
import 'primeicons/primeicons.css'

useHead({
  title: 'ReWorkflow',
  meta: [
    { name: 'description', content: 'Slate Support Staffing and Solutions' }
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
