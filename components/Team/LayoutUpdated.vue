<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center max-w-5xl mx-auto">
    <div v-for="bio in profiles" :key="bio.id">
      <TeamBio :bio/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProfiles } from '~/stores/index.js'

useHead({
  title: 'ReWorkflow - Our Team'
})

const profiles = useProfiles()
</script>