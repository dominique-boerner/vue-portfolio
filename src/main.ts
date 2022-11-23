import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import LottieAnimation from "lottie-web-vue";
import {createI18n} from "vue-i18n";
import de from "@/i18n/de.json";

const app = createApp(App)



const i18n = createI18n({
  locale: "de",
  messages: {
    de
  },
})

app.use(router)
app.use(LottieAnimation)
app.use(i18n);

app.mount('#app')
