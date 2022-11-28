<template>
  <h2 class="heading">
    <slot></slot>
  </h2>
</template>

<style scoped>
@tailwind components;

@layer components {
  .heading {
    @apply text-3xl text-center uppercase py-2 md:text-5xl md:text-left dark:text-white transition ease-in-out delay-300;
  }
}
</style>
