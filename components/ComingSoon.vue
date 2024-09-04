<script setup>
useHead({
    title: 'ReWorkflow - Page not found'
})
</script>

<template>
    <div class="content-wrapper relative">
        <img src="/img/logo-bg.svg" alt="rew"
            class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 !opacity-5">
        <div class="flex flex-col items-center">
            <div class="space-y-4">
                <img src="/img/main-logo.svg" alt="ReWorkflow" width="231" height="30" />
                <h1 class="text-uppercase text-center px-3">404</h1>
                <p class="text-center text-lg">page not found</p>
            </div>

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
    font-size: 100px;
}

p {
    color: var(--rew-secondary-green);
    letter-spacing: 5.5px;
}
</style>