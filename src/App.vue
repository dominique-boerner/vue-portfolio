<script setup lang="ts">
import { RouterView } from "vue-router";
import { useScroll } from "@/composables/useScroll";
import Fab from "@/components/atoms/Fab.vue";
import NavBar from "@/components/navbar/NavBar.vue";
import { useThemeStore } from "../stores/theme.store";

const scroll = useScroll();
const themeStore = useThemeStore();

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <div :class="themeStore.theme">
    <div class="bg-body dark:bg-primary">
      <header>
        <NavBar />
      </header>
      <main>
        <RouterView />
      </main>
      <aside>
        <fab v-if="scroll > 800" @click="scrollTop">
          <font-awesome-icon icon="chevron-up"></font-awesome-icon>
        </fab>
      </aside>
    </div>
  </div>
</template>
