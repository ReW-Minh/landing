<template>
  <BasePageContainer>
    <section id="mission" aria-labelledby="mission-heading">
      <AboutMission />
    </section>

    <section id="values" aria-labelledby="values-heading">
      <AboutValues />
    </section>

    <section id="team" aria-labelledby="team-heading">
      <div class="text-center py-12">Team section placeholder</div>
    </section>
  </BasePageContainer>
</template>

<script setup lang="ts">
useHead({
  title: 'ReWorkflow - About',
  meta: [
    {
      name: 'description',
      content: 'Learn about ReWorkflow\'s mission, values, and team. We collaborate with education teams to build sustainable Slate systems.'
    }
  ]
})
</script>
