import Aura from '@primevue/themes/aura'

import { definePreset } from "@primeuix/styled";

const Noir = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{zinc.50}',
      100: '{zinc.100}',
      200: '{zinc.200}',
      300: '{zinc.300}',
      400: '{zinc.400}',
      500: '{zinc.500}',
      600: '{zinc.600}',
      700: '{zinc.700}',
      800: '{zinc.800}',
      900: '{zinc.900}',
      950: '{zinc.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '#4E6C3C',
          inverseColor: '#ffffff',
          hoverColor: '#768471',
          activeColor: '#768471'
        },
        highlight: {
          background: '{zinc.950}',
          focusBackground: '{zinc.700}',
          color: '#ffffff',
          focusColor: '#ffffff'
        }
      },
      dark: {
        primary: {
          color: '{zinc.50}',
          inverseColor: '{zinc.950}',
          hoverColor: '{zinc.100}',
          activeColor: '{zinc.200}'
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    }
  }
});

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
        preset: Noir,
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