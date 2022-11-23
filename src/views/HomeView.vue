<script setup lang="ts">
import Header from "@/components/Header.vue";
import Section from "@/components/Section.vue";
import uiUxAnimation from "@/assets/animations/95959-ux-and-ui-morphing-animation.json";
import testDrivenAnimation from "@/assets/animations/92460-checkmark-animation.json";
import designAnimation from "@/assets/animations/39434-designing-icon.json";
import LanguagePicker from "@/components/LanguagePicker.vue";
import environment from "@/config/environment";
import {setTranslation} from "@/util/translation.util";
</script>

<template>
  <div class="min-h-screen bg-body -z-10 py-4">
    <div class="flex justify-end">
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
</template>
