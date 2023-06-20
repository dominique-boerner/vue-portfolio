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
    class="relative aspect-square cursor-pointer transition ease-in-out rounded-3xl overflow-hidden hover:saturate-200"
  >
    <img class="w-full object-cover h-96 rounded-2xl" alt="" :src="imgSrc" />
    <div class="flex flex-col p-2">
      <span
        class="text-5xl font-bold inline rounded-r-2xl box-decoration-clone"
      >
        {{ title }}
      </span>
      <span class="px-2 py-1">{{ date }}</span>
    </div>
  </div>
</template>
