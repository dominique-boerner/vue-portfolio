<script setup lang="ts">
import Tag from "@/components/Tag.vue";
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <h2 class="heading-2">Meine Technologien</h2>
    <div class="flex justify-center flex-wrap w-full md:w-6/12">
      <Tag :label="'React'" />
      <Tag :label="'Angular'" />
      <Tag :label="'Storybook'" />
      <Tag :label="'PHP'" />
      <Tag :label="'SCSS'" />
      <Tag :label="'Jest'" />
      <Tag :label="'Karma'" />
      <Tag :label="'Cypress'" />
      <Tag :label="'TailwindCSS'" />
      <Tag :label="'TypeScript'" />
      <Tag :label="'NestJS'" />
      <Tag :label="'Java'" />
    </div>
  </div>
</template>