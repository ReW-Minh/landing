import Aura from '@primevue/themes/aura'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss', 'nuxt-aos'],
  css: ['~/assets/scss/main.scss', '~/assets/scss/editor.scss'],
  ssr: false,
  spaLoadingTemplate: true,
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
      baseURL: 'https://rew-admin.vercel.app/',
      // baseURL: 'http://127.0.0.1:5000/',
    },
  },
})