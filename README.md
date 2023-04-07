# Nuxt 3 Boilerplate

A Nuxt 3 starter boilerplate with a lot of useful features.

## Available scripts

### Setup

Make sure to install the dependencies:

```bash
npm install
```

### Devtools

Enable devtools:

```bash
npx nuxi@latest devtools enable
```

Disable devtools:

```bash
npx nuxi@latest devtools disable
```

### Lint & format

Manually check types:

```bash
npm run typecheck
```

### Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

### Production

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

- [x] `src` directory
- [ ] Eslint & Prettier
- [ ] Husky & Commitlint
- [ ] Unit Test
- [x] [Strict type-checking](https://nuxt.com/docs/guide/concepts/typescript)
- [x] [Vue Composition Utilities (VueUse)](https://vueuse.org/)
- [x] [State management (Pinia)](https://pinia.vuejs.org/)
- [x] [Devtools (Nuxt DevTools)](https://devtools.nuxtjs.org/)
- [x] Built-in layouts
  - [x] Default layout
  - [x] Empty layout
- [x] Built-in 404 page
- [x] Built-in global types
- [ ] Built-in composables
  - [ ] useAsset

## Setup notes

### src directory

1. Set srcDir option in nuxt.config file.

    ```typescript
    // nuxt.config.ts

    export default defineNuxtConfig({
      srcDir: 'src/',
    });
    ```

### Strict type-checking

1. Install needed devDependencies

    ```bash
    npm i -D vue-tsc typescript @types/node
    ```

2. Enable the `typescript.typeCheck` option in your nuxt.config file.

    ```typescript
    export default defineNuxtConfig({
      typescript: {
        strict: true,
        typeCheck: true,
      },
    });
    ```

3. Optionally add task script to manually check your types with `nuxi`.

    ```json
    {
      "scripts": {
        "typecheck": "npx nuxi typecheck",
      },
    }
    ```

### Vue Composition Utilities (VueUse)

1. Install VueUse

    ```bash
    npm i -D @vueuse/nuxt @vueuse/core
    ```

2. Add module to nuxt.config file

    ```typescript
    // nuxt.config.ts
    
    export default defineNuxtConfig({
      modules: [
        '@vueuse/nuxt',
      ],
    })
    ```

### State management (Pinia)

1. Install Pinia

    ```bash
    npm i pinia @pinia/nuxt
    ```

2. Add Pinia to nuxt.config file 

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

### Devtools (Nuxt DevTools)

1. To enable devtools run:

    ```bash
    npx nuxi@latest devtools enable
    ```

2. To disable devtools run:

    ```bash
    npx nuxi@latest devtools disable
    ```

### Global types

1. At the root of your project create a directory named `types` with an `index.ts` file.
2. Add your global types declaration like in the example below.

    ```typescript
    // ~/types/index.ts

    export { };

    declare global {
      interface User {
        id: string;
        name: string;
        email: string;
      }  
    }
    ```
