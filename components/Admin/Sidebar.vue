<template>
    <div class="h-full sidebar">
        <Menu class="h-full flex flex-col" :model="items">
            <template #start>
                <NuxtLink class="m-4 pb-2 block relative logo" to="/">
                    <img src="/img/main-logo.svg" alt="ReWorkflow" class="img-fluid">

                    <span class="absolute">Admin</span>
                </NuxtLink>
            </template>
            <template #item="{ item, props }">
                <NuxtLink :to="item.route" class="flex items-center" v-bind="props.action">
                    <i :class="item.icon" />
                    <span>{{ item.label }}</span>
                </NuxtLink>
            </template>
            <template #end>
                <div class="m-1">
                    <Button class="w-full" label="Logout" severity="secondary" icon="pi pi-sign-out" outlined
                        @click="handleLogout" />
                </div>
            </template>
        </Menu>
    </div>
</template>

<script setup>
const items = ref([
    { label: 'Podcast', icon: 'pi pi-microphone', route: '/admin/podcast' },
])

const handleLogout = () => {
    adminLogout()
    navigateTo('/admin/login')
}
</script>

<style lang="scss">
.sidebar {
    .p-menu {
        min-width: unset;
    }

    .p-menu-item-content:has(> .router-link-active) {
        color: var(--p-menu-item-focus-color);
        background: var(--p-menu-item-focus-background);
        font-weight: 600;
    }

    .p-menu-end {
        margin-top: auto;
    }

    .logo {
        text-decoration: none;
        color: var(--high-contrast-text-color);

        span {
            font-size: .75vw;
            bottom: -10px;
            right: 0
        }
    }
}
</style>