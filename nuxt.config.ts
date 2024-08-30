import Aura from '@primevue/themes/aura'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss', 'nuxt-aos'],
  css: ['~/assets/scss/main.scss'],
  ssr: false,
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('swiper-')
    }
  },
  routeRules: {
    '/admin': { redirect: '/admin/podcast' },
  },
  aos: {
    once: true
  },
  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.rew-dark'
        }
      }
    }
  },
  devServer: {
    port: 8000
  },
  runtimeConfig: {
    public: {
      baseURL: 'https://mharew.pythonanywhere.com/',
    },
  },
})