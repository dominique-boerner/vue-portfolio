<script setup lang="ts">
import { toRefs } from "vue";

interface CardProps {
  imgSrc?: string;
  title?: string;
  text?: string;
}

const props = defineProps<CardProps>();

const { imgSrc, title, text } = toRefs(props);

const hasHeader = () => {
  return imgSrc?.value;
};

const hasMain = () => {
  return title?.value && text?.value;
};
</script>

<template>
  <section
    class="border-4 border-white rounded-md bg-white dark:border-primary-contrast dark:bg-primary"
  >
    <header v-if="hasHeader()">
      <img class="w-full object-cover" alt="" :src="imgSrc" />
    </header>
    <main v-if="hasMain()" class="flex flex-col px-4 py-4">
      <Text type="heading1" class="font-bold">{{ title }}</Text>
      <Text class="my-2" type="body1">
        {{ text }}
      </Text>
    </main>
  </section>
</template>
