# Nuxt 3 Boilerplate

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Features

- [Source directory](https://nuxt.com/docs/api/configuration/nuxt-config#srcdir)
- [Strict type-checking](https://nuxt.com/docs/guide/concepts/typescript)
- [Global types](https://stackoverflow.com/a/73237686)
- [404 page](https://www.reddit.com/r/Nuxt/comments/s7mtkz/how_to_create_nuxt_3_404_error_page/?utm_source=share&utm_medium=web2x&context=3)
- [VueUse](https://vueuse.org/)

  ```bash
  npm i -D @vueuse/nuxt @vueuse/core
  ```

  ```typescript
  // nuxt.config.ts
  export default defineNuxtConfig({
    modules: [
      '@vueuse/nuxt',
    ],
  })
  ```

- [Nuxt Devtools](https://devtools.nuxtjs.org/)

  ```bash
  npx nuxi@latest devtools enable
  ```

- Predefined layouts

  ```text
  src/layouts/default.vue
  src/layouts/empty.vue
  ```

- [Pinia](https://pinia.vuejs.org/)

  Install Pinia in Nuxt 3

  ```bash
  npm i pinia @pinia/nuxt
  ```

  Add Pinia to your nuxt.config file 

  ```typescript
  // nuxt.config.ts
  export default defineNuxtConfig({
    imports: {
      // Auto-import pinia stores defined in `~/stores`
      dirs: ['stores']
    },
    modules: [
      '@pinia/nuxt',
    ],
    pinia: {
      autoImports: [
        'defineStore',
        'storeToRefs',
      ],
    },
  });
  ```