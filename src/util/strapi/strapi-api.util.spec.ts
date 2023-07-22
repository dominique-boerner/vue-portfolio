import { describe, test, expect } from "vitest"
import { StrapiApi } from "@/util/strapi/strapi-api.util"

describe("strapi-api.util.ts", () => {
  describe("isEndpointAllowed", () => {
    test("should return true", () => {
      const endpoint = "posts"
      expect(StrapiApi.isEndpointAllowed(endpoint)).toBeTruthy()
    })

    test("should return false", () => {
      const endpoint = "users"
      expect(StrapiApi.isEndpointAllowed(endpoint)).toBeFalsy()
    })
  })
})
