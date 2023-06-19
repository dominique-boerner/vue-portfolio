<script setup lang="ts">
import { ref } from "vue"

type PComponentPreviewSelectedType = "preview" | "code"

interface PComponentPreviewProps {
  code?: string
}

defineProps<PComponentPreviewProps>()

const selectedView = ref<PComponentPreviewSelectedType>("preview")
</script>

<template>
  <section class="my-8 rounded-md bg-white p-10 pt-0">
    <header v-if="code" class="flex justify-end">
      <nav>
        <button class="underline" @click="selectedView = 'preview'">
          Preview
        </button>
        <button class="ml-4 underline" @click="selectedView = 'code'">
          Code
        </button>
      </nav>
    </header>
    <slot v-if="selectedView === 'preview'"></slot>
    <pre v-if="selectedView === 'code'">
      {{ code }}
    </pre>
  </section>
</template>
