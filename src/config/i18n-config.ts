import de from "@/i18n/de.json"
import en from "@/i18n/en.json"
import { getLanguage } from "@/util/translation.util"

export default {
  legacy: false,
  locale: getLanguage(),
  messages: {
    en,
    de,
  },
  globalInjection: true,
}
