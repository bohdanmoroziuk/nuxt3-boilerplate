# Nuxt 3 Boilerplate

A Nuxt 3 starter boilerplate with a lot of useful features.

## Quick Start

- This project using `npm` as package manager
- Clone this project to your computer `git clone https://github.com/yuzumi/nuxt3-boilerplate`
- Install dependencies `npm install`
- Run `npm run dev` to start development server and open `http://localhost:3000` in your browser

## Available scripts

### Setup

Make sure to install the dependencies:

```bash
npm install
```

### DevTools

Enable devtools:

```bash
npm run devtools:enable
```

Disable devtools:

```bash
npm run devtools:disable
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

Start the development server on <http://localhost:3000>

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

### Docker

Create and start the development container:

```bash
make dev-up
```

Stop and remove the development container:

```bash
make dev-down
```

Create and start the production container:

```bash
make prod-up
```

Stop and remove the production container:

```bash
make prod-down
```

## Features

- [x] `src` directory
- [x] [ESLint](https://qiita.com/kentarou_masuda/items/c0180fe383b01ba54cbf)
- [x] [Strict type-checking](https://nuxt.com/docs/guide/concepts/typescript)
- [x] [Husky](https://typicode.github.io/husky/) & [Lint-staged](https://github.com/okonet/lint-staged)
- [x] [i18n](https://v8.i18n.nuxtjs.org/)
- [x] [VueUse](https://vueuse.org/)
- [x] [Pinia](https://pinia.vuejs.org/)
- [x] [Nuxt DevTools](https://devtools.nuxtjs.org/)
- [x] [Vitest](https://vitest.dev/)
- [x] Layouts
  - [x] [Default](./src/layouts/default.vue)
  - [x] [Empty](./src/layouts/empty.vue)
- [x] [Error page](./src/error.vue)
- [x] [404 page](./src/pages/%5B...slug%5D.vue)
- [x] [Global types](./src/types/index.ts)
- [x] Composables
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

    > How would you like to use ESLint? To check syntax and find problems
    > What type of modules does your project use? JavaScript modules (import/export)
    > Which framework does your project use? Vue.js
    > Does your project use TypeScript? Yes
    > Where does your code run? Node
    > What format do you want your config file to be in? JavaScript
    > Would you like to install them now? No
    ```

    ```javascript
    // .eslintrc.cjs

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

4. Update your VS Code settings to look like this:

    ```json
    {
      "eslint.format.enable": true,
      "editor.codeActionsOnSave": {
          "source.fixAll.eslint": true
      }
    }
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

### Husky & Lint-staged

1. Install Husky

    ```bash
    npx husky-init && npm install
    ```

2. Install Lint-staged

    ```bash
    npm install --save-dev lint-staged
    ```

3. Inside `.husky/pre-commit` replace `npm test` with `npx lint-staged`.

    ```txt
    #!/usr/bin/env sh
    . "$(dirname -- "$0")/_/husky.sh"

    npx lint-staged
    ```

4. In the root directory of your project, create the file `.lintstagedrc.json`
with the following contents:

    ```json
    {
      "*.{js,jsx,vue,ts,tsx}": "npm run lint:fix"
    }
    ```

### VueUse

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

### Pinia

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

### Nuxt DevTools

1. To enable devtools run:

    ```bash
    npm run devtools:enable
    ```

2. To disable devtools run:

    ```bash
    npm run devtools:disable
    ```

### Vitest

1. Install the following dependencies:

    ```bash
    npm i -D vitest jsdom @vitejs/plugin-vue
    ```

    ```bash
    npm i -D @vue/test-utils @nuxt/test-utils
    ```

2. Create your Vitest configuration file (vitest.config.js):

    ```javascript
    // vitest.config.js

    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'

    export default defineConfig({
      plugins: [vue()],
      test: {
        globals: true,
        environment: 'jsdom',
      },
    })
    ```

3. Add the following script to your project:

    ```json
    {
      "scripts": {
        "test": "vitest"
      }
    }
    ```

4. Create your first test:


    ```typescript
    // tests/components/HelloWorld.vue

    import { describe, it, expect } from 'vitest'
    import { mount } from '@vue/test-utils'

    import HelloWorld from '../../src/components/HelloWorld.vue';

    describe('HelloWorld', () => {
      it('renders correctly', () => {
        const wrapper = mount(HelloWorld)
        expect(wrapper.html()).contain('Hello, world!')
      })
    })
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

## Templates

Other templates you may be interested in:

- [nuxt3-awesome-starter](https://github.com/viandwi24/nuxt3-awesome-starter)
- [nuxt3-starter ](https://github.com/xiaoluoboding/nuxt3-starter)
- [nuxt3-boilerplate](https://github.com/taunoha/nuxt3-boilerplate)
- [nuxt3-eslint-starter](https://github.com/weicheng2138/nuxt3-eslint-starter)

## License

MIT [@yuzumi](https://github.com/yuzumi)
