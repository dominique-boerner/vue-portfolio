<script setup lang="ts">
import themeToggleAnimation from "@/assets/animations/47369-toggle-dark-light.json"
import environment from "@/config/environment"
import { setTranslation } from "@/util/translation.util"
import { LottieAnimation } from "lottie-web-vue"
import LanguagePicker from "@/components/molecules/LanguagePicker.vue"
import { useThemeStore } from "@/stores/theme.store"
import { onMounted, ref } from "vue"

const themeStore = useThemeStore()
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
</script>

<template>
  <div class="flex justify-between dark:bg-primary dark:text-body">
    <button
      class="w-32 select-none"
      @click="toggleTheme()"
      data-cy="theme-toggle-button"
    >
      <lottie-animation
        ref="themeButton"
        :animation-data="themeToggleAnimation"
        :auto-play="false"
      ></lottie-animation>
    </button>
    <div class="flex items-center">
      <LanguagePicker
        :selected-language="$i18n.locale"
        :available-languages="environment.availableLanguages"
        @select-language="
          $i18n.locale = $event
          setTranslation($event)
        "
      ></LanguagePicker>
    </div>
  </div>
</template>
