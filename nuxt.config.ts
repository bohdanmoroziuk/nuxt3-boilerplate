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
    '@vueuse/nuxt',
    '@pinia/nuxt'
  ],
  pinia: {
    autoImports: [
      'defineStore',
      'storeToRefs'
    ]
  }
})
