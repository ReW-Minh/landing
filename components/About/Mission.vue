<template>
  <div class="mission-section" data-aos="fade-up">
    <div class="mission-bg-shape">
      <img src="/img/logo-bg.svg" alt="" aria-hidden="true" />
    </div>
    <div class="mission-overlay"></div>
    <div class="mission-content">
      <h1 id="mission-heading" class="mission-headline">
        <span class="headline-line">Rooted in Service.</span>
        <span class="headline-line nowrap">Cultivated with Care.</span>
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
  position: absolute;
  right: -5%;
  top: 50%;
  transform: translateY(-50%);
  width: 55%;
  max-width: 700px;
  opacity: 0.15;
  pointer-events: none;

  img {
    width: 100%;
    height: auto;
    filter: brightness(0) invert(1);
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
  z-index: 1;
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
    width: 65%;
    right: -10%;
    opacity: 0.12;
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
    width: 80%;
    right: -20%;
    opacity: 0.1;
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
