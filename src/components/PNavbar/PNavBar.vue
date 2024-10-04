<script setup lang="ts">
import themeToggleAnimation from "@/assets/animations/47369-toggle-dark-light.json"
import environment from "@/config/environment"
import { setTranslationLocalStorage } from "@/util/translation.util"
import { LottieAnimation } from "lottie-web-vue"
import { useThemeStore } from "@/stores/theme.store"
import { onMounted, ref } from "vue"
import { useI18n } from "vue-i18n"
import AppLanguagePicker from "@/components/AppLanguagePicker/AppLanguagePicker.vue"

const themeStore = useThemeStore()
const { locale } = useI18n()
let themeButton = ref()

onMounted(animateThemeButton)

function toggleTheme() {
  themeStore.toggleTheme()
  animateThemeButton()
}

function animateThemeButton() {
  const isDark = themeStore.theme === "dark"
  if (isDark) {
    themeButton.value.setDirection(1)
    themeButton.value.play()
  } else {
    themeButton.value.setDirection(-1)
    themeButton.value.play()
  }
}

const setTranslation = (language: string) => {
  locale.value = language
  setTranslationLocalStorage(language)
}
</script>

<template>
  <div class="flex justify-between dark:bg-primary dark:text-body">
    <button
      class="w-32 h-full select-none rounded-full"
      @click="toggleTheme()"
      data-testid="theme-toggle-button"
    >
      <lottie-animation
        ref="themeButton"
        :animation-data="themeToggleAnimation"
        :auto-play="false"
      ></lottie-animation>
    </button>
    <div class="flex items-center">
      <AppLanguagePicker
        :selected-language="$i18n.locale"
        :available-languages="environment.availableLanguages"
        @select-language="setTranslation($event)"
      ></AppLanguagePicker>
    </div>
  </div>
</template>
