<template>
    <header class="fixed top-0 left-0 right-0 z-50">
        <nav class="container-fluid flex items-center bg-transparent">
            <NuxtLink class="navbar-brand py-1.5" to="/">
                <img src="/img/main-logo.svg" alt="ReWorkflow" width="231" height="30">
            </NuxtLink>
            <MobileMenu />
            <div class="md:block hidden ml-auto" id="rewHeader">
                <div class="navbar-nav">
                    <NuxtLink class="nav-link ml-0 md:ml-4 lg:ml-12 p-2 whitespace-nowrap" to="/">
                        Home
                    </NuxtLink>
                    <NuxtLink class="nav-link ml-0 md:ml-4 lg:ml-12 p-2 whitespace-nowrap" to="/our-team">
                        Our Team
                    </NuxtLink>
                    <a class="nav-link ml-0 md:ml-4 lg:ml-12 p-2 whitespace-nowrap" :href="RESOURCE_LINK" target="_blank">
                        ReSource
                    </a>
                    <a class="nav-link ml-0 md:ml-4 lg:ml-12 p-2 whitespace-nowrap" :href="PODCAST_LINK" target="_blank">
                        Podcast
                    </a>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
header {
    background: rgba(240, 243, 239, 0.6);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);

    nav {
        min-height: 109px;
    }
}

.nav-link:has(.router-link-active) {
    color: var(--rew-active-brown)
}
</style>