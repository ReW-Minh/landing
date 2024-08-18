<template>
    <div class="row g-0" style="min-height: 100vh">
        <div v-if="store.isLoggedIn" class="col-lg-2">
            <Sidebar />
        </div>
        <div :class="store.isLoggedIn ? 'col-lg-10' : 'col-12'">
            <slot />
        </div>
    </div>
    <ConfirmDialog />
</template>

<script setup>
import ConfirmDialog from 'primevue/confirmdialog'
import Sidebar from '../../components/Admin/Sidebar.vue'
import axios from '../../utils/axios'

import { useAuthStore } from '../../store/auth'
const store = useAuthStore()

const token = sessionStorage.getItem('accessToken')
if (token) {
    store.setIsLoggedIn(true)
    axios.defaults.headers.common = {
        Authorization: `Bearer ${token}`
    }
}
</script>