<script setup lang="ts">
import Header from "@/components/templates/Header.vue"
import Section from "@/components/templates/Section.vue"
import uiUxAnimation from "@/assets/animations/95959-ux-and-ui-morphing-animation.json"
import uiUxDarkAnimation from "@/assets/animations/95959-ux-and-ui-morphing-animation--dark-mode.json"
import testDrivenAnimation from "@/assets/animations/92460-checkmark-animation.json"
import designAnimation from "@/assets/animations/39434-designing-icon.json"
import designDarkAnimation from "@/assets/animations/39434-designing-icon--dark-mode.json"
import arrowAnimation from "@/assets/animations/75206-arrow-down.json"
import arrowDarkAnimation from "@/assets/animations/75206-arrow-down--dark-mode.json"
import TechnologySection from "@/components/templates/TechnologySection.vue"
import { technologies } from "@/technologies"
import { computed } from "vue"
import { useThemeStore } from "@/stores/theme.store"

const themeStore = useThemeStore()
const state = computed(() => ({
  isDark: themeStore.theme === "dark",
}))
</script>

<template>
  <div data-cy="home-body">
    <div class="min-h-screen -z-10 pt-2">
      <Header
        :animation-data="state.isDark ? arrowDarkAnimation : arrowAnimation"
        :title="$t('home.header.title')"
        :text="$t('home.header.text')"
      />
      <Section
        anchor="ux"
        next-anchor-href="testing"
        :next-anchor-animation-data="
          state.isDark ? arrowDarkAnimation : arrowAnimation
        "
        :animation-data="state.isDark ? uiUxDarkAnimation : uiUxAnimation"
        :title="$t('home.ux.title')"
        :text="$t('home.ux.text')"
      />
      <Section
        anchor="testing"
        next-anchor-href="design-system"
        :next-anchor-animation-data="
          state.isDark ? arrowDarkAnimation : arrowAnimation
        "
        :animation-data="testDrivenAnimation"
        :title="$t('home.testing.title')"
        :text="$t('home.testing.text')"
      />
      <Section
        anchor="design-system"
        :animation-data="state.isDark ? designDarkAnimation : designAnimation"
        :title="$t('home.design-system.title')"
        :text="$t('home.design-system.text')"
      />
      <TechnologySection
        :title="$t('home.technologies.title')"
        :text="$t('home.technologies.text')"
        :technologies="technologies"
      />
    </div>
  </div>
</template>
