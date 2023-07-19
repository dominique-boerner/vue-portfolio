import { createApp } from "vue"
import { createI18n } from "vue-i18n"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import LottieAnimation from "lottie-web-vue"
import {
  faChevronLeft,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"
import i18nConfig from "@/config/i18n-config"
import VueHighlightJS from "vue3-highlightjs"

import "./assets/main.css"
import "highlight.js/styles/atom-one-dark-reasonable.css"

const app = createApp(App)

// router
app.use(router)

// lottie
app.use(LottieAnimation)

// i18n
app.use(createI18n(i18nConfig))

// pinia
const pinia = createPinia()
app.use(pinia)

// icons
const icons = [faChevronLeft, faChevronRight, faChevronUp]
icons.forEach((icon) => library.add(icon))
app.component("font-awesome-icon", FontAwesomeIcon)

// highlight.js
app.use(VueHighlightJS)

app.mount("#app")
