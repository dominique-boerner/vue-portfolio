import environment from "@/config/environment";

const THEME_KEY = "IS_DARK_MODE";

export function isDarkMode(): boolean {
  return localStorage.getItem(THEME_KEY) === "true" ?? environment.darkMode;
}

export function setDarkMode(darkMode: boolean) {
  localStorage.setItem(THEME_KEY, ""+darkMode);
}