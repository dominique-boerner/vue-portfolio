<script setup lang="ts">
import { LottieAnimation } from "lottie-web-vue";

interface Section {
  title: string;
  text: string;
  animationData: any;
  anchor?: string;
  nextAnchorAnimationData?: any;
  nextAnchorHref?: string;
}

defineProps<Section>();
</script>
<template>
  <div
    class="flex flex-col justify-center items-center w-full h-screen"
    :id="anchor"
  >
    <div
      class="flex flex-col justify-center items-center md:w-10/12 md:flex-row"
    >
      <lottie-animation
        class="w-8/12 md:w-3/12"
        :key="animationData"
        :animation-data="animationData"
        :loop="true"
        :speed="0.5"
      ></lottie-animation>
      <div class="flex flex-col w-9/12">
        <h2 class="heading-2">{{ title }}</h2>
        <article class="article">{{ text }}</article>
        <a
          class="flex justify-center items-center z-50 mt-4 md:justify-start"
          :href="`#${nextAnchorHref}`"
        >
          <lottie-animation
            class="h-20 transition ease-in-out hover:opacity-70"
            :key="nextAnchorAnimationData"
            :animation-data="nextAnchorAnimationData"
            :loop="true"
          ></lottie-animation>
        </a>
      </div>
    </div>
  </div>
</template>
