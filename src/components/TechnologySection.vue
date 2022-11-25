<script setup lang="ts">
import Tag from "@/components/Tag.vue";
import type { Technology } from "@/types/technology";

interface TechnologySection {
  title?: string;
  technologies: Technology[];
}

defineProps<TechnologySection>();
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <h2 class="heading-2">{{ title }}</h2>
    <div class="flex justify-center flex-wrap w-full md:w-6/12">
      <Tag v-for="tech in technologies" :label="tech" />
    </div>
  </div>
</template>
