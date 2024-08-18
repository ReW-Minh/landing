import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import 'vue3-toastify/dist/index.css'
import 'primeicons/primeicons.css'
import './assets/scss/main.scss'

import { createApp } from 'vue'
import { defineAsyncComponent } from 'vue'
import { definePreset } from '@primevue/themes'
import { createPinia } from 'pinia'

import Vue3Toasity from 'vue3-toastify'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ConfirmationService from 'primevue/confirmationservice'
import App from './App.vue'
import ComingSoon from './components/Inc/ComingSoon.vue'
import router from './router'

const ThemePreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: 'var(--rew-primary-green)',
            100: 'var(--rew-primary-green)',
            200: 'var(--rew-primary-green)',
            300: 'var(--rew-primary-green)',
            400: 'var(--rew-primary-green)',
            500: 'var(--rew-primary-green)',
            600: 'var(--rew-secondary-green)',
            700: 'var(--rew-primary-green)',
            800: 'var(--rew-primary-green)',
            900: 'var(--rew-primary-green)',
            950: 'var(--rew-primary-green)'
        }
    }
})

const pinia = createPinia()
const app = createApp(App)

app.component('default-layout', defineAsyncComponent(() => import('./views/layout/default.vue')))
app.component('admin-layout', defineAsyncComponent(() => import('./views/layout/admin.vue')))

app.use(Vue3Toasity, { autoClose: 3000 })
app.use(router)
app.use(pinia)
app.use(ConfirmationService)
app.use(PrimeVue, {
    theme: {
        preset: ThemePreset,
        options: {
            darkModeSelector: '.app-dark',
        }
    }
})

app.component('ComingSoon', ComingSoon)
app.mount('#app')
