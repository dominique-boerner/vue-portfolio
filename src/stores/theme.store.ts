import { defineStore } from "pinia"
import type { Theme } from "@/types/theme"

const LS_THEME_KEY = "IS_DARK_MODE"

interface ThemeStore {
  theme: Theme
}

/**
 * Stores the selection of the theme.
 */
export const useThemeStore = defineStore("theme", {
  state: () =>
    ({
      theme: localStorage.getItem(LS_THEME_KEY) ?? ("light" as Theme),
    } as ThemeStore),
  actions: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light"
      localStorage.setItem(LS_THEME_KEY, this.theme)
    },
  },
})
