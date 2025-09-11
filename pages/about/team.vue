<template>
  <BasePageContainer>
    <img src="/img/logo-bg.svg" alt="rew"
         class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 invisible md:visible mt-[150px]">

    <BasePageHeader>
      <div class="flex items-baseline justify-center gap-2">
        <span class="mr-0.5">The</span>
        <img src="/img/main-logo.svg" alt="ReWorkflow" width="231" height="30">
        <span>Team</span>
      </div>
    </BasePageHeader>

    <BasePageContent maxWidth="">
      <div class="team" v-for="[groupName, groupProfiles] in profilesByGroup" :key="groupName">
        <h3 class="text-2xl font-semibold rew-text-brown mb-4">{{ groupName }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-center">
          <div v-for="bio in groupProfiles" :key="bio.id">
            <TeamBio :bio/>
          </div>
        </div>
      </div>
    </BasePageContent>
  </BasePageContainer>
</template>

<script setup lang="ts">
import { useProfiles } from '~/stores/index.js'
import type { IProfile } from '~/types/types'

useHead({
  title: 'ReWorkflow - Our Team'
})

const profiles = useProfiles()

const groupOrder = {
  [PROFILE_GROUP.CLIENT_SERVICES]: 0,
  [PROFILE_GROUP.CUSTOM_SOLUTIONS]: 1,
  [PROFILE_GROUP.LEADERSHIP]: 2
}

const profilesByGroup = computed(() => {
  const groups = new Map<PROFILE_GROUP, IProfile[]>()

  profiles.value.forEach(profile => {
    const groupKey = profile.group;

    if (!groups.has(groupKey)) {
      groups.set(groupKey, []);
    }

    groups.get(groupKey)!.push(profile);
  })

  return new Map([...groups.entries()].sort((a, b) => groupOrder[a[0]] - groupOrder[b[0]]))
})
</script>

<style lang="scss" scoped>
@media (max-width: 720px) {
  .heading {
    img {
      width: 150px;
    }
  }
}
</style>