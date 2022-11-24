<script setup lang="ts">
import BoyHandDrawnFace from "@/components/icons/BoyHandDrawnFace.vue";
import {LottieAnimation} from "lottie-web-vue";
import personAnimation from "@/assets/animations/24747-person-on-a-computer.json";
import arrowAnimation from "@/assets/animations/75206-arrow-down.json";
import arrowDarkAnimation from "@/assets/animations/75206-arrow-down--dark-mode.json";

interface Header {
  darkMode: boolean;
}

defineProps<Header>()

</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <lottie-animation class="w-96" :animation-data="personAnimation" :loop="true"></lottie-animation>
    <h1 class="title">{{ $t("home.header.title") }}</h1>
    <article
        class="text-2xl md:text-4xl text-primary w-10/12 text-center mb-8 dark:text-white transition ease-in-out delay-300">
      {{ $t("home.header.text") }}
    </article>
    <div class="relative w-80 container h-64 flex flex-col">
      <a class="btn flex justify-center items-center z-50 w-full" href="#ux">
        <lottie-animation class="h-48 transition ease-in-out hover:opacity-70"
                          :key="darkMode" :animation-data="darkMode ? arrowDarkAnimation : arrowAnimation" :loop="true"></lottie-animation>
      </a>
    </div>
  </div>
</template>