<template>
  <div class="team-section">
    <BasePageHeader>
      <h2 id="team-heading">Your ReWorkflow Team</h2>
    </BasePageHeader>

    <BasePageContent maxWidth="">
      <TeamLayoutUpdated />
    </BasePageContent>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.team-section {
  padding: 3rem 0;
}

@media (max-width: 767px) {
  .team-section {
    padding: 2rem 0;
  }
}
</style>
