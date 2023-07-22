import { describe, test, expect } from "vitest"
import { toLocaleDateString } from "@/util/date-formatter.util"

describe("date-formatter.util.ts", () => {
  describe("toLocaleDateString", () => {
    test("should return a date when value is string", () => {
      const value = "1995-12-17T03:24:00"
      expect(toLocaleDateString(value)).toEqual("17.12.95")
    })

    test("should return an empty string, when value is undefined", () => {
      const value = undefined
      // @ts-ignore on run time, we can never know if something bad happens.
      expect(toLocaleDateString(value)).toEqual("")
    })
  })
})
