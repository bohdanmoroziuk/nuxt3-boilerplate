# Nuxt 3 Boilerplate

A Nuxt 3 starter boilerplate with a lot of useful features.

## Available scripts

### Setup

Make sure to install the dependencies:

```bash
npm install
```

### DevTools

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

Find ESLint errors:

```bash
npm run lint
```

Find ESLint errors and try to fix them:

```bash
npm run lint:fix
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
- [x] [ESLint](https://qiita.com/kentarou_masuda/items/c0180fe383b01ba54cbf)
- [ ] Husky & Commitlint
- [ ] Unit Test
- [x] [Strict type-checking](https://nuxt.com/docs/guide/concepts/typescript)
- [x] Modular structure
- [x] [Vue Composition Utilities (VueUse)](https://vueuse.org/)
- [x] [State management (Pinia)](https://pinia.vuejs.org/)
- [x] [DevTools (Nuxt DevTools)](https://devtools.nuxtjs.org/)
- [x] Built-in layouts
  - [x] [Default](./src/layouts/default.vue)
  - [x] [Empty](./src/layouts/empty.vue)
- [x] Basic error handling
- [x] Built-in 404 page
- [x] Built-in global types
- [x] Built-in composables
  - [x] [useAsset](./src/composables/asset.ts)

## Setup notes

### src directory

1. Set `srcDir` option in `nuxt.config` file.

    ```typescript
    // nuxt.config.ts

    export default defineNuxtConfig({
      srcDir: 'src/',
    });
    ```

### ESLint

1. Install needed devDependencies

    ```bash
    npm i -D eslint eslint-plugin-vue
    ```

    ```bash
    npm i -D typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @nuxtjs/eslint-config-typescript
    ```

2. Generate config file

    ```bash
    npx eslint --init

    > To check syntax and find problems
    > JavaScript modules (import/export)
    > Vue.js
    > Does your project use TypeScript? Yes
    > Where does your code run? Node
    > What format do you want your config file to be in? JavaScript
    > Would you like to install them now with npm? No
    ```

    ```javascript
    // .eslintrc.js

    module.exports = {
      "env": {
          "es2021": true,
          "node": true
      },
      "extends": [
          "eslint:recommended",
          "plugin:vue/essential",
          "plugin:@typescript-eslint/recommended",
          "@nuxtjs/eslint-config-typescript" // Add here
      ],
      "parserOptions": {
          "ecmaVersion": 13,
          "parser": "@typescript-eslint/parser",
          "sourceType": "module"
      },
      "plugins": [
          "vue",
          "@typescript-eslint"
      ],
      "rules": {
      }
    };
    ```

3. Add task scripts

    ```json
    "scripts": {
      "lint": "eslint --ext .ts,.js,.vue .",
      "lint:fix": "eslint --fix --ext .ts,.js,.vue ."
    },
    ```

### Strict type-checking

1. Install needed devDependencies

    ```bash
    npm i -D vue-tsc typescript @types/node
    ```

2. Enable the `typescript.typeCheck` option in your `nuxt.config` file.

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

### Modular structure

How to add and use your own modules:

1.
2.
3.
4.
5.

### Vue Composition Utilities (VueUse)

1. Install VueUse

    ```bash
    npm i -D @vueuse/nuxt @vueuse/core
    ```

2. Add VueUse to `nuxt.config` file

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

2. Add Pinia to `nuxt.config` file 

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

### DevTools (Nuxt DevTools)

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
