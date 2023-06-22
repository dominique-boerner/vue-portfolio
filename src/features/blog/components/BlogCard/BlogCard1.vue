<script setup lang="ts">
import { useIntlDateTimeFormat } from "vue-composable"

interface BlogCardProps {
  title: string
  date: Date
  imgSrc: string
}

const props = defineProps<BlogCardProps>()

const { formatter } = useIntlDateTimeFormat()
const date = formatter.value.format(props.date)
</script>

<template>
  <div
    class="relative aspect-square cursor-pointer shadow-md transition ease-in-out rounded-3xl overflow-hidden hover:shadow-2xl hover:saturate-200"
  >
    <div class="absolute w-3/4">
      <p
        class="my-4 inline rounded-r-2xl box-decoration-clone text-6xl font-bold leading-[5.5rem]"
      >
        <span
          class="inline rounded-r-2xl bg-primary-contrast box-decoration-clone p-3 px-5"
        >
          {{ title }}
        </span>
      </p>
    </div>
    <span
      class="absolute top-3 right-3 rounded-full bg-primary-contrast px-2 py-1"
      >{{ date }}</span
    >
    <img class="h-full w-full object-cover" :src="imgSrc" alt="" />
  </div>
</template>
