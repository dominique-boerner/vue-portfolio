<script setup lang="ts">
import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"
import type { PostAttributes } from "@api/types/post.types"
import { toLocaleDateString } from "@/util/date-formatter.util"
import { useBlogStore } from "@/features/blog/stores/blog.store"
import BlogPostSkeleton from "@/features/blog/components/BlogPostSkeleton/BlogPostSkeleton.vue"
import PText from "@/components/PText/PText.vue"
import PMarkdownRenderer from "@/components/PMarkdownRenderer/PMarkdownRenderer.vue"

const router = useRouter()
const blogStore = useBlogStore()
const post = ref<PostAttributes>()

const id = router.currentRoute.value.params.id as string

onMounted(async () => {
  post.value = await blogStore.getStrapiPost(id)
})
</script>

<template>
  <section class="flex flex-col">
    <PText
      class="text-right self-end w-24"
      type="body1"
      :is-loading="post?.createdAt === undefined"
    >
      {{ toLocaleDateString(post?.publishedAt) }}
    </PText>
    <PText
      class="text-center py-4"
      type="title"
      :is-loading="post?.title === undefined"
    >
      {{ post?.title }}
    </PText>
    <BlogPostSkeleton v-if="post?.text === undefined" />
    <PText v-if="post?.text !== undefined">
      <PMarkdownRenderer :source="post?.text" />
    </PText>
  </section>
</template>
