<script setup lang="ts">
import MarkdownIt from "markdown-it"
import MarkdownItHighlightjs from "markdown-it-highlightjs"

const markdown = new MarkdownIt().use(MarkdownItHighlightjs)

defineProps({
  source: {
    type: String,
    default: "",
  },
})
</script>
<template>
  <div class="markdown-renderer" v-html="markdown.render(source)" />
</template>

<style lang="scss">
.markdown-renderer {
  h1 {
    @apply text-heading1 leading-relaxed font-bold mt-4;
  }

  h2 {
    @apply text-heading2 font-bold mt-4;
  }

  h3 {
    @apply text-heading3 font-bold mt-4;
  }

  p {
    @apply my-4 text-body1 leading-8;
  }

  pre {
    code {
      @apply rounded-md;
    }
  }
}
</style>
