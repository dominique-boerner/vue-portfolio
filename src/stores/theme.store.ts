import { defineStore } from "pinia"
import type { Theme } from "@/types/theme"
import { ref } from "vue"
import { isTheme } from "@/util/theme.util"

const LS_THEME_KEY = "IS_DARK_MODE"

const getTheme = (): Theme => {
  const theme = localStorage.getItem(LS_THEME_KEY)

  return isTheme(theme) ? theme : "light"
}

/**
 * Stores the selection of the theme.
 */
export const useThemeStore = defineStore("theme", () => {
  const theme = ref<Theme>(getTheme())

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light"
    localStorage.setItem(LS_THEME_KEY, theme.value)
  }

  return {
    theme,
    toggleTheme,
  }
})
