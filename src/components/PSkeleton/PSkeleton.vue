<script setup lang="ts">
import type { TextType } from "@/components/PText/textType"
import { computed, toRefs } from "vue"
import type { ComputedRef } from "vue"

type PSkeletonLoaderType = TextType
interface PSkeletonProps {
  type?: PSkeletonLoaderType
}

const props = withDefaults(defineProps<PSkeletonProps>(), {
  type: "body1",
})

const { type } = toRefs(props)

const getClass: ComputedRef<string> = computed(() => {
  const heightClassLookup: Record<TextType, string> = {
    heading1: "h-heading1",
    heading2: "h-heading2",
    heading3: "h-heading3",
    title: "h-heading1 sm:h-title",
    body1: "h-body1",
    body2: "h-body2",
  }

  let style: string[] = []

  style.push(heightClassLookup[type.value])

  return style.join(" ")
})
</script>
<template>
  <div
    class="flex w-full animate-pulse rounded-md bg-primary/20 dark:bg-primary-contrast/20"
    :class="getClass"
  ></div>
</template>
