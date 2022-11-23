import environment from "@/config/environment";

const I18N_LANGUAGE_KEY = environment.defaultLanguage;

export function getTranslation(): string {
  return localStorage.getItem(I18N_LANGUAGE_KEY) ?? environment.defaultLanguage;
}

export function setTranslation(translation: string) {
  localStorage.setItem(I18N_LANGUAGE_KEY, translation);
}