<script setup lang="ts">
interface LanguagePicker {
  selectedLanguage: string;
  availableLanguages: string[];
}

defineProps<LanguagePicker>();
defineEmits(["select-language"]);
</script>
<template>
  <div
    class="flex justify-evenly items-center border border-primary rounded-full px-1 dark:border-white select-none"
  >
    <span
      v-for="language of availableLanguages"
      class="language-picker-item"
      :class="{ selected: selectedLanguage === language }"
      @click="$emit('select-language', language)"
      >{{ language }}</span
    >
  </div>
</template>

<style scoped>
@tailwind components;

@layer components {
  .language-picker-item {
    @apply flex justify-center items-center cursor-pointer rounded-full hover:opacity-70 mx-1 p-2 h-8 m-2 uppercase dark:text-white/40;
  }

  .language-picker-item.selected {
    @apply text-white bg-primary dark:bg-white dark:text-primary;
  }
}
</style>
