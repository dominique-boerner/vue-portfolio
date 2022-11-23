import de from "@/i18n/de.json";
import en from "@/i18n/en.json";
import {getTranslation} from "@/util/translation.util";

export default {
  locale: getTranslation(),
  messages: {
    en, de
  },
  globalInjection: true
}