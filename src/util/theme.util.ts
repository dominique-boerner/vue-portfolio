import type { Theme } from "@/types/theme"

/**
 * Checks if the given value satisfies the type Theme.
 * @param value the value to check
 */
export const isTheme = (value: string | undefined | null): value is Theme => {
  return (value && value === "light") || value === "dark"
}
