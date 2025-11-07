<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center max-w-5xl mx-auto">
    <div v-for="bio in newProfiles" :key="bio.id">
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

const newProfiles = computed(() => {
  const filtered = profiles.value.filter(profile => profile.name !== 'Peter McKay')

  const updated = filtered.map(profile => {
    let title = profile.title,
        id = profile.id

    if (profile.name === 'Alice Byrd') {
      title = 'Senior Slate Strategist'
      id = 5
    }

    if (profile.name === 'Kelly Connor Lewis') {
      id = 6
    }


    return {
      ...profile,
      title,
      id
    }
  })

  return updated.sort((a, b) => a.id - b.id)
})
</script>