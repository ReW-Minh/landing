<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import AOS from 'aos'

import { computed } from 'vue'
import { useRoute } from 'vue-router'

AOS.init({ mirror: false, once: true })

const route = useRoute()

const layout = computed(() => `${route?.meta?.layout}-layout` ?? 'div')
</script>

<style>
@font-face {
  font-family: 'Ondo Medium';
  src: local('Ondo Medium'), url('./assets/fonts/OndoMedium.otf') format('truetype');
}

.rew-font {
  font-family: 'Ondo Medium', sans-serif !important;
  font-weight: 500 !important;
}
</style>
