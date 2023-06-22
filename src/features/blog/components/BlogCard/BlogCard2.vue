<script setup lang="ts">
import { useIntlDateTimeFormat } from "vue-composable"
import PText from "@/components/PText/PText.vue"

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
    class="relative cursor-pointer transition ease-in-out rounded-3xl overflow-hidden hover:saturate-200"
  >
    <img class="w-full object-cover h-60 rounded-2xl" alt="" :src="imgSrc" />
    <div class="flex flex-col p-2 dark:text-primary-contrast">
      <span class="opacity-70 text-lg py-2">{{ date }}</span>
      <span
        class="text-4xl font-bold inline rounded-r-2xl box-decoration-clone"
      >
        {{ title }}
      </span>
      <PText class="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis
        convallis dolor eget vestibulum. Integer consequat efficitur varius. Sed
        mollis.
      </PText>
    </div>
  </div>
</template>
