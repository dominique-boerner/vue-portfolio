<script setup lang="ts">
import { RouterView } from "vue-router"
import { useScroll } from "@/composables/useScroll"
import Fab from "@/components/atoms/Fab.vue"
import NavBar from "@/components/PNavbar/PNavBar.vue"
import { useThemeStore } from "@/stores/theme.store"
import Footer from "@/components/templates/Footer.vue"

const scroll = useScroll()
const themeStore = useThemeStore()

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
</script>

<template>
  <div :class="themeStore.theme">
    <div class="bg-body dark:bg-primary">
      <div class="mx-auto max-w-portfolio px-4 py-6 md:p-6">
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

      <Footer class="mt-12" />
    </div>
  </div>
</template>
