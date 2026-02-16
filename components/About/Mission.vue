<template>
  <div class="mission-section" data-aos="fade-up">
    <div class="mission-content">
      <h1 id="mission-heading" class="mission-headline">
        Rooted in Service. Cultivated with Care.
      </h1>
      <p class="mission-body">
        We collaborate with education teams to replace reactive work with
        clear, sustainable systems and operations that thrive in every season.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.mission-section {
  background-color: var(--rew-primary-green);
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;
}

.mission-content {
  max-width: 800px;
  text-align: center;
}

.mission-headline {
  font-family: 'Ondo Medium', sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.mission-body {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

@media (max-width: 767px) {
  .mission-section {
    min-height: 30vh;
    padding: 3rem 1rem;
  }

  .mission-headline {
    font-size: 32px;
  }

  .mission-body {
    font-size: 16px;
  }
}
</style>
