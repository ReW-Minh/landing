<template>
    <div class="p-2 h-100 sidebar">
        <Menu class="h-100 d-flex flex-column" :model="items">
            <template #start>
                <router-link class="m-3 pb-2 d-block position-relative logo" :to="{ name: 'Home' }">
                    <img src="/src/assets/img/main-logo.svg" alt="ReWorkflow" class="img-fluid">

                    <span class="position-absolute">Admin</span>
                </router-link>
            </template>
            <template #item="{ item, props }">
                <router-link :to="{ name: item.route }" class="d-flex items-center" v-bind="props.action">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                </router-link>
            </template>
            <template #end>
                <div class="m-1">
                    <Button class="w-100" label="Logout" severity="secondary" icon="pi pi-sign-out" outlined
                        @click="handleLogout" />
                </div>
            </template>
        </Menu>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '../../services/useAuth'
import { useRouter } from 'vue-router'

const { logout } = useAuth()

const router = useRouter()

const items = ref([
    { label: 'Bio', icon: 'pi pi-users', route: 'AdminBio' },
    { label: 'PowerCampus', icon: 'pi pi-bolt', route: 'AdminPowerCampus' },
    { label: 'Home Text', icon: 'pi pi-home', route: 'AdminHomeText' }
])

const handleLogout = () => {
    logout()
    router.push({ name: 'Home' })
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