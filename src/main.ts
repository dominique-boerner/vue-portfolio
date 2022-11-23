import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import LottieAnimation from "lottie-web-vue";
import {createI18n} from "vue-i18n";
import de from "@/i18n/de.json";
import en from "@/i18n/en.json";
import environment from "@/config/environment";

const app = createApp(App)

const i18n = createI18n({
  locale: environment.defaultLanguage,
  messages: {
    de, en
  },
  globalInjection: true
})

app.use(router)
app.use(LottieAnimation)
app.use(i18n);

app.mount('#app')
