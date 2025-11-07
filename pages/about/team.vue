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
      <TeamLayoutUpdated v-if="showNew" />
      <TeamLayout v-else />
    </BasePageContent>
  </BasePageContainer>
</template>

<script setup lang="ts">
useHead({
  title: 'ReWorkflow - Our Team'
})

const showNew = Date.now() >= Date.UTC(2025, 10, 8, 4 - 7)
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