import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import LottieAnimation from "lottie-web-vue";
import { createI18n } from "vue-i18n";
import i18nConfig from "@/config/i18n-config";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const icons = [faChevronLeft, faChevronRight, faChevronUp];

icons.forEach((icon) => library.add(icon));

const app = createApp(App);

app.use(router);
app.use(LottieAnimation);
app.use(createI18n(i18nConfig));

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
