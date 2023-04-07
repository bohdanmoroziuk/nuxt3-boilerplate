import type { Nuxt } from '@nuxt/schema'
import { defineNuxtModule } from '@nuxt/kit'
import { resolve, join } from 'pathe'

export default defineNuxtModule({
  meta: {
    name: 'blog-module',
    configKey: 'blog-module'
  },
  setup (_options: unknown, nuxt: Nuxt) {
    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push(resolve(__dirname, './composables'))
    })

    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: join(__dirname, 'components')
      })
    })

    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'blog',
        path: '/blog',
        file: resolve(__dirname, './pages/blog-index.vue')
      })
    })
  }
})
