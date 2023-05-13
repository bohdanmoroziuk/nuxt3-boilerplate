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
  i18n: {
    strategy: 'prefix_except_default',
    locales: ['en', 'fr'],
    defaultLocale: 'en'
  }
})
