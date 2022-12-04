<script setup lang="ts">
import Header from "@/components/templates/Header.vue";
import Section from "@/components/templates/Section.vue";
import uiUxAnimation from "@/assets/animations/95959-ux-and-ui-morphing-animation.json";
import uiUxDarkAnimation from "@/assets/animations/95959-ux-and-ui-morphing-animation--dark-mode.json";
import testDrivenAnimation from "@/assets/animations/92460-checkmark-animation.json";
import designAnimation from "@/assets/animations/39434-designing-icon.json";
import designDarkAnimation from "@/assets/animations/39434-designing-icon--dark-mode.json";
import LanguagePicker from "@/components/molecules/LanguagePicker.vue";
import environment from "@/config/environment";
import { setTranslation } from "@/util/translation.util";
import { onMounted, ref } from "vue";
import { LottieAnimation } from "lottie-web-vue";
import themeToggleAnimation from "@/assets/animations/47369-toggle-dark-light.json";
import { isDarkMode, setDarkMode } from "@/util/theme.util";
import arrowAnimation from "@/assets/animations/75206-arrow-down.json";
import arrowDarkAnimation from "@/assets/animations/75206-arrow-down--dark-mode.json";
import TechnologySection from "@/components/templates/TechnologySection.vue";
import type { Technology } from "@/types/technology";
import Footer from "@/components/templates/Footer.vue";
import { useScoll } from "@/composables/useScroll";

const technologies: Technology[] = [
  "ReactJS",
  "Angular",
  "Storybook",
  "PHP",
  "SCSS",
  "Jest",
  "Karma",
  "Cypress",
  "TailwindCSS",
  "TypeScript",
  "NestJS",
  "Java",
];

const darkMode = ref(isDarkMode());
let themeButton = ref();

onMounted(() => {
  animateThemeButton();
});

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
  setDarkMode(darkMode.value);
  animateThemeButton();
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
  <div :class="darkMode ? 'dark' : 'light'" data-cy="home-body">
    <div
      class="min-h-screen -z-10 pt-2 bg-body dark:bg-gray-900 transition ease-in-out delay-300"
    >
      <div class="flex justify-between">
        <button
          class="ml-4 w-32 select-none"
          @click="toggleDarkMode()"
          data-cy="theme-toggle-button"
        >
          <lottie-animation
            ref="themeButton"
            :animation-data="themeToggleAnimation"
            :auto-play="false"
          ></lottie-animation>
        </button>
        <LanguagePicker
          :selected-language="$i18n.locale"
          :available-languages="environment.availableLanguages"
          @select-language="
            $i18n.locale = $event;
            setTranslation($event);
          "
        ></LanguagePicker>
      </div>
      <Header
        :dark-mode="darkMode"
        :animation-data="darkMode ? arrowDarkAnimation : arrowAnimation"
        :title="$t('home.header.title')"
        :text="$t('home.header.text')"
      />
      <Section
        anchor="ux"
        next-anchor-href="testing"
        :next-anchor-animation-data="
          darkMode ? arrowDarkAnimation : arrowAnimation
        "
        :animation-data="darkMode ? uiUxDarkAnimation : uiUxAnimation"
        :title="$t('home.ux.title')"
        :text="$t('home.ux.text')"
      />
      <!--      <Slider />-->
      <Section
        anchor="testing"
        next-anchor-href="design-system"
        :next-anchor-animation-data="
          darkMode ? arrowDarkAnimation : arrowAnimation
        "
        :animation-data="testDrivenAnimation"
        :title="$t('home.testing.title')"
        :text="$t('home.testing.text')"
      />
      <Section
        anchor="design-system"
        :animation-data="darkMode ? designDarkAnimation : designAnimation"
        :title="$t('home.design-system.title')"
        :text="$t('home.design-system.text')"
      />
      <TechnologySection
        :title="$t('home.technologies.title')"
        :text="$t('home.technologies.text')"
        :technologies="technologies"
      />
      <Footer class="mt-12" />
    </div>
  </div>
</template>
