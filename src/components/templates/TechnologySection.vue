<script setup lang="ts">
import Tag from "@/components/atoms/Tag.vue";
import type { Technology } from "@/types/technology";
import Text from "@/components/Text/Text.vue";

interface TechnologySection {
  title: string;
  text: string;
  technologies: Technology[];
}

defineProps<TechnologySection>();
</script>
<template>
  <section class="flex flex-col justify-center items-center h-screen">
    <Text type="heading1">
      {{ title }}
    </Text>
    <Text class="md:text-center mb-2 mt- mx-4 md:w-8/12">
      {{ text }}
    </Text>
    <div class="flex justify-center flex-wrap w-full md:w-6/12">
      <Tag v-for="tech in technologies" class="appearing-tag" :label="tech" />
    </div>
  </section>
</template>
