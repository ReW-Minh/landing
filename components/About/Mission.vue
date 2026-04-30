<template>
  <div class="mission-section -mt-6 md:-mt-12" data-aos="fade-up">
    <div class="mission-bg-shape bg-white logo-container h-[142px] aspect-square overflow-hidden flex items-center justify-center">
      <div class="relative w-full h-full">
        <img src="/img/logo-5th.png" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1 w-[120%] h-[120%]" alt="rew">
      </div>
    </div>
    <div class="mission-overlay"></div>
    <div class="mission-content">
      <h1 id="mission-heading" class="mission-headline">
        <span class="headline-line">Rooted in Service.</span>
        <span class="headline-line nowrap">Cultivated with Care.</span>
      </h1>
      <p class="mission-body">
        We collaborate with education institutions to design and steward Slate ecosystems that replace reactive work
        with sustainable operations that thrive in every season.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.mission-section {
  background-color: var(--rew-primary-green);
  min-height: 50vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.mission-bg-shape {
  z-index: 1;
  position: absolute;
  right: 96px;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  height: 400px;
  max-width: 700px;
  pointer-events: none;
  opacity: 0.7;

  img {
    max-width: unset !important;
  }
}

.mission-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
          135deg,
          var(--rew-primary-green) 0%,
          rgba(67, 49, 41, 0.3) 100%
  );
  pointer-events: none;
}

.mission-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  margin-left: 5%;
}

.mission-headline {
  font-family: 'Mulish', sans-serif;
  font-size: 56px;
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.15;
}

.headline-line {
  display: block;
}

.nowrap {
  white-space: nowrap;
}

.mission-body {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  max-width: 550px;
}

@media (max-width: 1024px) {
  .mission-bg-shape {
    right: 40px;
    opacity: 0.2;
  }

  .mission-headline {
    font-size: 48px;
  }
}

@media (max-width: 767px) {
  .mission-section {
    min-height: auto;
    padding: 4rem 1.5rem;
  }

  .mission-bg-shape {
    right: 0;
    opacity: 0.2;
  }

  .mission-content {
    margin-left: 0;
  }

  .mission-headline {
    font-size: 36px;
  }

  .nowrap {
    white-space: normal;
  }

  .mission-body {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .mission-headline {
    font-size: 28px;
  }
}
</style>
