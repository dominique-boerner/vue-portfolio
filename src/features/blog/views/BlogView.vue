<script setup lang="ts">
import PText from "@/components/PText/PText.vue"
import BlogCard1 from "@/features/blog/components/BlogCard/BlogCard1.vue"
import { useBlogStore } from "@/features/blog/stores/blog.store"
import { PostAttributes } from "@api/types/post.types"
import type { StrapiResponse } from "@api/types/types"
import { onMounted, ref } from "vue"
import { toLocaleDateString } from "@/util/date-formatter.util"

const blogStore = useBlogStore()

const posts = ref<StrapiResponse<PostAttributes>>()

// only for testing purposes
const date = new Date()

onMounted(async () => {
  posts.value = await blogStore.getStrapiPosts()
})
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <PText class="py-24" type="title">Blog</PText>

    <div
      v-if="posts?.data"
      class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-24"
    >
      <!-- TODO: refactor into "FeaturedPosts" -->
      <div v-for="post in posts.data">
        <RouterLink :to="`blog/${post.attributes.slug}`">
          <BlogCard1
            :title="post.attributes.title"
            img-src="https://images.unsplash.com/photo-1524077410193-2f667f9ab09a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
            :date="toLocaleDateString(post.attributes.publishedAt)"
          ></BlogCard1>
        </RouterLink>
      </div>
    </div>
    <!--    <div class="grid grid-cols-3 gap-24 py-14">-->
    <!--      <BlogCard2-->
    <!--        title="8 places to enjoy driving outdoors in Brighton"-->
    <!--        date=""-->
    <!--        img-src="https://images.unsplash.com/photo-1498081959737-f3ba1af08103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"-->
    <!--      ></BlogCard2>-->
    <!--      <BlogCard2-->
    <!--        title="8 places to enjoy driving outdoors in Brighton"-->
    <!--        date=""-->
    <!--        img-src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"-->
    <!--      ></BlogCard2>-->
    <!--      <BlogCard2-->
    <!--        title="8 places to enjoy driving outdoors in Brighton"-->
    <!--        date=""-->
    <!--        img-src="https://images.unsplash.com/photo-1535882686-b1332af6f51e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"-->
    <!--      ></BlogCard2>-->
    <!--      <BlogCard2-->
    <!--        title="8 places to enjoy driving outdoors in Brighton"-->
    <!--        date=""-->
    <!--        img-src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"-->
    <!--      ></BlogCard2>-->
    <!--      <BlogCard2-->
    <!--        title="8 places to enjoy driving outdoors in Brighton"-->
    <!--        date=""-->
    <!--        img-src="https://images.unsplash.com/photo-1498081959737-f3ba1af08103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"-->
    <!--      ></BlogCard2>-->
    <!--      <BlogCard2-->
    <!--        title="8 places to enjoy driving outdoors in Brighton"-->
    <!--        date=""-->
    <!--        img-src="https://images.unsplash.com/photo-1498081959737-f3ba1af08103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"-->
    <!--      ></BlogCard2>-->
    <!--    </div>-->
  </div>
</template>
