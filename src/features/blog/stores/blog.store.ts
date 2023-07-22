import { defineStore } from "pinia"
import type { PostAttributes } from "@api/types/post.types"
import { useStrapi } from "@/composables/useStrapi"
import { StrapiApi } from "@/util/strapi/strapi-api.util"

export const useBlogStore = defineStore("blog", () => {
  const strapi = useStrapi()
  const getStrapiPost = async (slug: string): Promise<PostAttributes> => {
    let filters = [`[slug][$eq]=${slug}`]
    const value = await strapi.find<PostAttributes>(
      StrapiApi.AllowedEndpoints.POSTS,
      filters
    )
    return value.data[0].attributes
  }

  return {
    getStrapiPost,
  }
})
