<template>
  <BasePageContainer>
    <img src="/img/logo-bg.svg" alt="rew"
         class="bg-logo !fixed !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 invisible md:visible mt-[150px]">

    <section id="mission" aria-labelledby="mission-heading">
      <AboutMission />
    </section>

    <section id="values" aria-labelledby="values-heading">
      <AboutValues />
    </section>

    <section id="team" aria-labelledby="team-heading">
      <AboutTeamSection />
    </section>

  </BasePageContainer>
</template>

<script setup lang="ts">
const { setupSectionObservers } = useActiveSection()

useHead({
  title: 'ReWorkflow - About',
  meta: [
    {
      name: 'description',
      content: 'Learn about ReWorkflow\'s mission, values, and team. We collaborate with education teams to build sustainable Slate systems.'
    }
  ]
})

// Set up intersection observers for scroll-based navigation highlighting
onMounted(() => {
  setupSectionObservers(['mission', 'values', 'team'])
})
</script>

<style>
#mission, #team {
  scroll-margin-top: 48px;
}

#values {
  scroll-margin-top: 20px;
}

</style>
