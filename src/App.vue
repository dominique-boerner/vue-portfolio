<script setup lang="ts">
import { RouterView } from "vue-router";
import { useScoll } from "@/composables/useScroll";
import Fab from "@/components/atoms/fab.vue";

const scroll = useScoll();

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <RouterView />
  <fab v-if="scroll > 800" @click="scrollTop">
    <font-awesome-icon icon="chevron-up"></font-awesome-icon>
  </fab>
</template>
