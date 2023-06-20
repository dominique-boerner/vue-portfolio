<script setup lang="ts">
import PText from "@/components/PText/PText.vue"
import BlogCard1 from "@/features/blog/components/BlogCard/BlogCard1.vue"
import BlogCard2 from "@/features/blog/components/BlogCard/BlogCard2.vue"
import useBlog from "@/features/blog/composables/useBlog"

const { getCategories } = useBlog()

// only for testing purposes
const date = new Date()
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <PText class="py-24" type="title">Blog</PText>

    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-24">
      <BlogCard1
        title="8 places to enjoy driving outdoors in Brighton"
        img-src="https://images.unsplash.com/photo-1524077410193-2f667f9ab09a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
        :date="date"
      ></BlogCard1>

      <BlogCard2
        title="8 places to enjoy driving outdoors in Brighton"
        img-src="https://images.unsplash.com/photo-1560015534-cee980ba7e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80/photo-1524077410193-2f667f9ab09a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
        :date="date"
      ></BlogCard2>
      <BlogCard2
        title="8 places to enjoy driving outdoors in Brighton"
        img-src="https://images.unsplash.com/photo-1498081959737-f3ba1af08103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        :date="date"
      ></BlogCard2>
      <BlogCard1
        title="8 places to enjoy driving outdoors in Brighton"
        img-src="https://images.unsplash.com/photo-1524077410193-2f667f9ab09a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
        :date="date"
      ></BlogCard1>
    </div>
  </div>
</template>
