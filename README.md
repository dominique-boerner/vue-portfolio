# Dominique Börner - Portfolio page

[![Deploy Front-End](https://github.com/dominique-boerner/vue-portfolio/actions/workflows/deploy-frontend.yml/badge.svg)](https://github.com/dominique-boerner/vue-portfolio/actions/workflows/deploy-frontend.yml)

This repository is the official repository for my portfolio - and my first approach in using Vue 3 with websites.

URL: https://dominiqueboerner.me

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```
