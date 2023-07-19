import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import BlogView from "@/features/blog/views/BlogView.vue"
import DesignView from "@/features/design/views/DesignView.vue"
import DesignTypographyView from "@/features/design/views/DesignTypographyView.vue"
import BlogPostView from "@/features/blog/views/BlogPostView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/design",
      name: "design",
      component: DesignView,
    },
    {
      path: "/design/typography",
      name: "design-typography",
      component: DesignTypographyView,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/blog/:id",
      name: "blogPage",
      component: BlogPostView,
    },
    {
      path: "/:pathMatch(.*)",
      name: "home",
      component: HomeView,
    },
  ],
})

export default router
