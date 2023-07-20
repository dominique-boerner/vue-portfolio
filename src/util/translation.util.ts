import environment from "@/config/environment"

const I18N_LANGUAGE_KEY = "LANGUAGE"

export function getLanguage(): string {
  return localStorage.getItem(I18N_LANGUAGE_KEY) ?? environment.defaultLanguage
}

export function setTranslationLocalStorage(translation: string) {
  localStorage.setItem(I18N_LANGUAGE_KEY, translation)
}
