<template>
    <header class="fixed-top">
        <nav class="navbar navbar-expand-md bg-transparent">
            <div class="container-fluid">
                <router-link class="navbar-brand" :to="{ name: 'Home' }">
                    <img src="/src/assets/img/main-logo.svg" alt="ReWorkflow" width="231" height="30">
                </router-link>
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-label="menu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="justify-content-end d-md-block d-none" id="rewHeader">
                    <div class="navbar-nav">
                        <router-link class="nav-link ms-sm-0 ms-md-4 ms-lg-5 nowrap" :to="{ name: 'Home' }">
                            Home
                        </router-link>
                        <router-link class="nav-link ms-sm-0 ms-md-4 ms-lg-5 nowrap" :to="{ name: 'PowerCampus' }">
                            PowerCampus
                        </router-link>
                        <router-link class="nav-link ms-sm-0 ms-md-4 ms-lg-5 nowrap" :to="{ name: 'OurTeam' }">
                            Our Team
                        </router-link>
                        <a class="nav-link ms-sm-0 ms-md-4 ms-lg-5" :href="RESOURCE_LINK" target="_blank">
                            ReSource
                        </a>
                        <a class="nav-link ms-sm-0 ms-md-4 ms-lg-5" :href="PODCAST_LINK" target="_blank">
                            Podcast
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { _ROUTES } from '../../router/routes'
import { PODCAST_LINK, RESOURCE_LINK } from '../../constants'
</script>

<style lang="scss" scoped>
header {
    background: rgba(240, 243, 239, 0.6);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
}

.nav-link:has(.router-link-active) {
    color: var(--rew-active-brown)
}
</style>