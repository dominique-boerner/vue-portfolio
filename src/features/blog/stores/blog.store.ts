import { defineStore } from "pinia"
import type { BlogPost, BlogPosts } from "@/features/blog/models/blog.model"
import { ref } from "vue"

export const useBlogStore = defineStore("blog", () => {
  const posts = ref<BlogPosts>([])

  const fetchPosts = async () => {
    // TODO: only for testing purposes
    const post: BlogPost = {
      author: "Dominique Börner",
      date: new Date().toDateString(),
      header: {
        imgSrc:
          "https://images.unsplash.com/photo-1518022525094-218670c9b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        title: "8 places to enjoy driving outdoors in Brighton",
      },
      sections: [
        {
          type: "text",
          text: "The picturesque seaside city of Brighton is not only famous for its vibrant nightlife, bustling shopping streets, and stunning coastal views, but it also offers an abundance of scenic routes and open roads that are a dream come true for driving enthusiasts. Whether you're a local or a visitor, embarking on a road trip through Brighton's beautiful surroundings is a fantastic way to experience the region's natural beauty and embrace the freedom of the open road. In this article, we'll explore eight spectacular places in and around Brighton where you can enjoy driving outdoors to your heart's content.",
        },
        {
          type: "text",
          text: "Brighton and its surroundings are a haven for driving enthusiasts, offering a variety of breathtaking landscapes, coastal views, and historic landmarks to explore. From the rugged cliffs of Beachy Head to the idyllic gardens of Wakehurst Place, these eight places provide the perfect backdrop for an unforgettable driving adventure. So, rev up your engines, hit the road, and immerse yourself in the natural beauty that Brighton has to offer.",
        },
        {
          type: "code",
          code: ".my-class { color: 'red'; } ",
          codeLanguage: "css",
        },
        {
          type: "image",
          imgSrc:
            "https://images.unsplash.com/photo-1518022525094-218670c9b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        },
      ],
    }
    posts.value.push(post)
  }

  const getPost = (id: string) => {
    return posts.value[0]
  }

  return {
    fetchPosts,
    getPost,
    posts,
  }
})
