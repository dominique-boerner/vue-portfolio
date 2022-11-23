<script setup lang="ts">
interface LanguagePicker {
  selectedLanguage: string;
  availableLanguages: string[];
}

defineProps<LanguagePicker>()
defineEmits(["select-language"]);

</script>
<template>
  <div class="flex justify-evenly items-center border border-primary rounded-full mr-4 px-1 dark:border-white transition ease-in-out delay-300">
    <span v-for="language of availableLanguages" class="language-picker-item"
          :class="{'selected': selectedLanguage === language}"
          @click="$emit('select-language', language)">{{ language }}</span>
  </div>
</template>

<style scoped>
@tailwind components;

@layer components {
  .language-picker-item {
    @apply flex justify-center items-center cursor-pointer rounded-full  hover:opacity-70 h-full mx-1 p-2 h-8 m-2 uppercase dark:text-white/40 transition-colors ease-in-out delay-300;
  }

  .language-picker-item.selected {
    @apply text-white bg-primary transition ease-in-out delay-300 dark:bg-white dark:text-primary;
  }
}
</style>