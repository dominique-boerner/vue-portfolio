import { isTheme } from "@/util/theme.util"
import { describe, test, expect } from "vitest"

describe("theme.util.ts", () => {
  describe("isTheme", () => {
    test("null is not a theme", () => {
      const nullIsTheme = isTheme(null)
      expect(nullIsTheme).toBeFalsy()
    })

    test("undefined is not a theme", () => {
      const undefinedIsTheme = isTheme(undefined)
      expect(undefinedIsTheme).toBeFalsy()
    })

    test("'bright' is not a theme", () => {
      const brightIsTheme = isTheme("bright")
      expect(brightIsTheme).toBeFalsy()
    })

    test("'light' is a theme", () => {
      const lightIsTheme = isTheme("light")
      expect(lightIsTheme).toBeTruthy()
    })

    test("'dark' is a theme", () => {
      const darkIsTheme = isTheme("dark")
      expect(darkIsTheme).toBeTruthy()
    })
  })
})
