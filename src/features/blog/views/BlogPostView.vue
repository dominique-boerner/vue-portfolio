<script setup lang="ts">
import { useBlogStore } from "@/features/blog/stores/blog.store"
import { useRouter } from "vue-router"
import PText from "@/components/PText/PText.vue"

const router = useRouter()
const blogStore = useBlogStore()

blogStore.fetchPosts()

const id = router.currentRoute.value.params.id as string
</script>

<template>
  <img
    class="w-full mt-14 mb-2 h-96 object-cover rounded-md"
    alt="cover"
    :src="blogStore.getPost(id).header.imgSrc"
  />
  <PText class="text-right" type="body2">
    {{ blogStore.getPost(id).author }}, {{ blogStore.getPost(id).date }}
  </PText>
  <PText class="text-center py-4" type="heading1">
    {{ blogStore.getPost(id).header.title }}
  </PText>
  <section v-for="section in blogStore.getPost(id).sections">
    <PText v-if="section.type === 'text'" class="py-4">
      {{ section.text }}
    </PText>
    <pre v-if="section.type === 'code'" v-highlightjs="section.code">
      <code class="rounded-md text-xl font-serif" :class="section.codeLanguage" />
    </pre>
    <img v-if="section.type === 'image'" :src="section.imgSrc" alt="" />
  </section>
</template>
