<script setup lang="ts">
import { toRefs } from "vue"
import PText from "@/components/PText/PText.vue"

interface CardProps {
  imgSrc?: string
  title?: string
  text?: string
}

const props = defineProps<CardProps>()

const { imgSrc, title, text } = toRefs(props)

const hasHeader = () => {
  return imgSrc?.value
}
</script>

<template>
  <section
    class="cursor-pointer rounded-md border-4 border-white bg-white shadow-md transition hover:shadow-lg dark:border-primary-contrast dark:bg-primary"
  >
    <header v-if="hasHeader()">
      <img class="w-full aspect-square object-cover" alt="" :src="imgSrc" />
    </header>
    <main class="flex flex-col px-4 py-4">
      <PText v-if="title" type="heading1" class="font-bold">{{ title }}</PText>
      <PText v-if="text" class="my-2" type="body1">
        {{ text }}
      </PText>
    </main>
  </section>
</template>
