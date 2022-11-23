<script setup lang="ts">
import Header from "@/components/Header.vue";
import Section from "@/components/Section.vue";
import uiUxAnimation from "@/assets/animations/95959-ux-and-ui-morphing-animation.json";
import testDrivenAnimation from "@/assets/animations/92460-checkmark-animation.json";
import designAnimation from "@/assets/animations/39434-designing-icon.json";
import LanguagePicker from "@/components/LanguagePicker.vue";
import environment from "@/config/environment";
import {setTranslation} from "@/util/translation.util";
import {onMounted, ref} from "vue";
import {LottieAnimation} from "lottie-web-vue";
import themeToggleAnimation from "@/assets/animations/47369-toggle-dark-light.json";
import {isDarkMode, setDarkMode} from "@/util/theme.util";

const darkMode = ref(isDarkMode());
let themeButton = ref();

onMounted(() => {
  animateThemeButton()
})

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
  setDarkMode(darkMode.value);
  animateThemeButton()
}

function animateThemeButton() {
  if (darkMode.value) {
    themeButton.value.setDirection(1);
    themeButton.value.play();
  } else {
    themeButton.value.setDirection(-1);
    themeButton.value.play();
  }
}

</script>

<template>
  <div :class="darkMode ? 'dark' : 'light'">
    <div class="min-h-screen -z-10 py-4 bg-body dark:bg-gray-900 transition ease-in-out delay-300">
      <div class="flex justify-between">
        <button class="ml-4 w-32" @click="toggleDarkMode()">
          <lottie-animation ref="themeButton" :animation-data="themeToggleAnimation"
                            :auto-play="false"></lottie-animation>
        </button>
        <LanguagePicker :selected-language="$i18n.locale"
                        :available-languages="environment.availableLanguages"
                        @select-language="$i18n.locale = $event; setTranslation($event)"></LanguagePicker>
      </div>
      <Header/>
      <Section anchor="ux"
               :animation-data="uiUxAnimation"
               :title="$t('home.ux.title')"
               :text="$t('home.ux.text')"
      />
      <Section :animation-data="testDrivenAnimation"
               :title="$t('home.testing.title')"
               :text="$t('home.testing.text')"
      />
      <Section :animation-data="designAnimation"
               :title="$t('home.design-system.title')"
               :text="$t('home.design-system.text')"
      />
    </div>
  </div>
</template>
