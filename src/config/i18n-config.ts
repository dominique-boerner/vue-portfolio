import environment from "@/config/environment";
import de from "@/i18n/de.json";
import en from "@/i18n/en.json";

export default {

  locale: environment.defaultLanguage,
  messages: {
    de, en
  },
  globalInjection: true
}