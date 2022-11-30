<script setup lang="ts">
import Tag from "@/components/atoms/Tag.vue";
import type { Technology } from "@/types/technology";
import H2 from "@/components/atoms/Heading.vue";
import Heading2 from "@/components/atoms/Heading.vue";
import Heading from "@/components/atoms/Heading.vue";
import Text from "@/components/atoms/Text.vue";

interface TechnologySection {
  title: string;
  text: string;
  technologies: Technology[];
}

defineProps<TechnologySection>();
</script>
<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <Heading>
      {{ title }}
    </Heading>
    <Text class="md:text-center mb-2 mx-4 md:w-8/12">
      {{ text }}
    </Text>
    <div class="flex justify-center flex-wrap w-full md:w-6/12">
      <Tag v-for="tech in technologies" class="appearing-tag" :label="tech" />
    </div>
  </div>
</template>
