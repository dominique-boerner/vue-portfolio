import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import LottieAnimation from "lottie-web-vue";
import {createI18n} from "vue-i18n";
import i18nConfig from "@/config/i18n-config";

const app = createApp(App)

app.use(router)
app.use(LottieAnimation)
app.use(createI18n(i18nConfig));

app.mount('#app')
