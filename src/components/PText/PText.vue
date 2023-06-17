<script setup lang="ts">
import type { Font, TextType } from "@/components/PText/textType"
import { computed, toRefs } from "vue"
import type { ComputedRef } from "vue"
import PSkeleton from "@/components/PSkeleton/PSkeleton.vue"

interface TextProps {
  font?: Font
  type?: TextType
  isLoading?: boolean
}

const props = withDefaults(defineProps<TextProps>(), {
  type: "body1",
  font: "default",
  isLoading: false,
})

const { type, font } = toRefs(props)

/**
 * Calculates the css-class of the Text component.
 */
const getClass: ComputedRef<string> = computed(() => {
  const textSizeClassLookup: Record<TextType, string> = {
    heading1: "text-heading1 leading-relaxed",
    heading2: "text-heading2",
    heading3: "text-heading3",
    title: "text-heading1 font-bold text-center leading-relaxed sm:text-title",
    body1: "text-body1 leading-8",
    body2: "text-body2 leading-6",
  }

  const fontClassLookup: Record<Font, string> = {
    default: "font-default",
    display: "font-display",
  }

  let style: string[] = ["text-primary dark:text-primary-contrast"]

  style.push(fontClassLookup[font.value])
  style.push(textSizeClassLookup[type.value])

  return style.join(" ")
})

/**
 * Calculates the tag by a given TextType.
 */
const tag: ComputedRef<string> = computed(() => {
  const type: TextType = props.type
  const tags: Record<TextType, string> = {
    heading3: "h1",
    heading2: "h2",
    heading1: "h1",
    body1: "p",
    body2: "p",
    title: "span",
  }

  return tags[type]
})
</script>

<template>
  <component :is="tag" :class="getClass">
    <PSkeleton
      v-if="isLoading"
      class="my-1"
      :type="type as TextType"
    ></PSkeleton>
    <slot v-if="!isLoading"></slot>
  </component>
</template>
