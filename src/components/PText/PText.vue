<script setup lang="ts">
import type { Font, TextType } from "@/components/PText/textType";
import { computed, ComputedRef, toRefs } from "vue";

interface TextProps {
  font?: Font;
  type?: TextType;
}

const props = withDefaults(defineProps<TextProps>(), {
  type: "body1",
  font: "default",
});

const { type, font } = toRefs(props);

/**
 * Calculates the css-class of the Text component.
 */
const getClass: ComputedRef<string> = computed(() => {
  const textSizeClassLookup: Record<TextType, string> = {
    heading1: "text-heading1 leading-relaxed",
    heading2: "text-heading2",
    heading3: "text-heading3",
    title: "text-title leading-relaxed",
    body1: "text-body1 leading-8",
    body2: "text-body2 leading-6",
  };

  const fontClassLookup: Record<Font, string> = {
    default: "font-default",
    display: "font-display",
  };

  let style: string[] = ["text-primary dark:text-primary-contrast"];

  style.push(fontClassLookup[font.value]);
  style.push(textSizeClassLookup[type.value]);

  return style.join(" ");
});

/**
 * Calculates the tag by a given TextType.
 */
const tag: ComputedRef<string> = computed(() => {
  const type: TextType = props.type;
  const tags: Record<TextType, string> = {
    heading3: "h1",
    heading2: "h2",
    heading1: "h1",
    body1: "p",
    body2: "p",
    title: "span",
  };

  return tags[type];
});
</script>

<template>
  <component :is="tag" :class="getClass">
    <slot></slot>
  </component>
</template>
