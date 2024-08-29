<script setup>
useHead({
    title: 'ReWorkflow - Page under construction'
})
</script>

<template>
    <div class="content-wrapper relative">
        <img src="/img/logo-bg.svg" alt="rew"
            class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 !opacity-5">
        <div class="flex flex-col items-center">
            <h1 class="text-uppercase text-center px-3">Under construction</h1>
            <p class="text-center">page nearly ready</p>
            <button class="rew-main-btn rew-box-shadow inline-flex items-center mt-10" @click="navigateTo('/')">
                Back to homepage
            </button>
        </div>
    </div>
</template>

<style scoped>
.content-wrapper {
    display: grid;
    place-items: center;
    height: 100dvh;
    width: 100dvw;
}

h1 {
    color: var(--rew-primary-green);
    font-size: 60px;
}

p {
    color: var(--rew-secondary-green);
    letter-spacing: 5.5px;
}

@media (max-width: 510px) {
    h1 {
        font-size: 11.7vw;
    }
}
</style>