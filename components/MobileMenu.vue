<template>
    <Drawer v-model:visible="visible" header=" " position="right">
        <div class="flex flex-col h-full overflow-hidden">
            <div class="grow flex flex-col items-center justify-center">
                <NuxtLink @click="visible = false" class="menu-link" to="/">
                    Home
                </NuxtLink>
                <NuxtLink @click="visible = false" class="menu-link" to="/our-team">
                    Our Team
                </NuxtLink>
                <a @click="visible = false" class="menu-link" :href="RESOURCE_LINK" target="_blank">
                    ReSource
                </a>
                <a @click="visible = false" class="menu-link" :href="PODCAST_LINK" target="_blank">
                    Podcast
                </a>
            </div>
            <div class="menu-btm">
                <div class="flex items-center justify-center mb-3 mx-5 overflow-hidden">
                    <a href="https://www.instagram.com/reworkflow/" target="_blank" class="mx-2">
                        <img src="/img/instagram-green.svg" alt="instagram">
                    </a>
                    <a href="https://www.linkedin.com/company/reworkflow/about/" class="mx-2">
                        <img src="/img/linkedin-green.svg" alt="linkedin">
                    </a>
                </div>
                <div>
                    <img src="/img/main-logo.svg" alt="ReWorkflow" width="231" height="30" class="m-auto">
                </div>
            </div>
        </div>
    </Drawer>
    <Button icon="pi pi-arrow-right" @click="visible = true" class="flex ml-auto md:hidden">
        <i class="pi pi-bars text-2xl" style="color: var(--rew-secondary-green)" />
    </Button>
</template>

<script setup>
const visible = ref(false)
</script>

<style scoped lang="scss">
.btn {
    &.btn-clear {
        border: none !important
    }
}

.indicator {
    background: #433129;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: inline-grid;
    place-items: center;
    right: 110px;
    top: 28px;
    transition: all linear .3s;

    &.expanded {
        transform: rotate(-180deg)
    }
}

.menu-link {
    color: var(--rew-secondary-green);
    font-size: 36px;
    font-weight: 700;
    text-decoration: none;
    margin: 8px 0;
    text-transform: capitalize;
    cursor: pointer;
}

.menu-link.active,
.menu-link.router-link-active,
.menu-link .router-link-active {
    color: var(--rew-active-brown);
    position: relative;
}

.menu-link.active::after,
.menu-link.router-link-active::after,
.menu-link .router-link-active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -500px;
    right: -500px;
    height: 3px;
    background: var(--rew-active-brown)
}
</style>

<style lang="scss">
.p-drawer {
    background-color: var(--rew-baby-grey) !important;
    border: none !important;
}
</style>