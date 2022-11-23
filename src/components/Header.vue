<script setup lang="ts">
import BoyHandDrawnFace from "@/components/icons/BoyHandDrawnFace.vue";
import {LottieAnimation} from "lottie-web-vue";
import personAnimation from "@/assets/animations/24747-person-on-a-computer.json";
import arrowAnimation from "@/assets/animations/120745-black-arrow-down.json";
import {ref} from "vue";
import Circle from "@/components/Circle.vue";

const isButtonHovered = ref(false);

</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <lottie-animation class="w-96" :animation-data="personAnimation" :loop="true"></lottie-animation>
    <h1 class="title">{{ $t("home.header.title") }}</h1>
    <article class="text-2xl md:text-4xl text-primary w-10/12 text-center mb-8">
      {{ $t("home.header.text") }}
    </article>
    <div class="relative w-80 container h-64 flex flex-col">
      <button class="btn btn-primary flex justify-center items-center z-50 w-full" @mouseover="isButtonHovered = true">
        <BoyHandDrawnFace class="fill-white stroke-white h-10 w-10 mr-2"/>
        {{ $t("home.header.about-me") }}
      </button>
      <div class="flex flex-col justify-center items-center">
        <lottie-animation class="h-52" :animation-data="arrowAnimation"></lottie-animation>
      </div>
    </div>
  </div>
</template>