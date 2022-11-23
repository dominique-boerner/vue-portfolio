<script setup lang="ts">
import {LottieAnimation} from "lottie-web-vue";


interface Section {
  title: string;
  text: string;
  animationData: JSON;
}

defineProps<Section>()

</script>
<template>
  <div class="flex flex-col justify-center items-center w-full h-screen">
    <div class="flex flex-col justify-center items-center md:w-10/12 md:flex-row">
      <lottie-animation class="w-8/12 md:w-3/12" :animation-data="animationData" :loop="true" :speed=".5"></lottie-animation>
      <div class="flex flex-col w-9/12">
        <h2 class="heading-2">{{ title }}</h2>
        <article class="article">{{ text }}
        </article>
      </div>
    </div>
  </div>
</template>