import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import BlogView from "@/features/blog/views/BlogView.vue"
import DesignView from "@/features/design/views/DesignView.vue"

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
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/:pathMatch(.*)",
      name: "home",
      component: HomeView,
    },
  ],
})

export default router
