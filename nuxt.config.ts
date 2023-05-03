// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  typescript: {
    strict: true,
    typeCheck: true
  },
  imports: {
    // Auto-import pinia stores defined in `~/stores`
    dirs: ['stores']
  },
  modules: [
    // Installed modules
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-quasar-ui',
    '@nuxtjs/i18n',

    // User modules
    './src/modules/blog/module.ts'
  ],
  pinia: {
    autoImports: [
      'defineStore',
      'storeToRefs'
    ]
  },
  quasar: {
    extras: {
      font: 'roboto-font',
      fontIcons: ['material-icons']
    }
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français'
      }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    vueI18n: './i18n.config.ts'
  }
})
