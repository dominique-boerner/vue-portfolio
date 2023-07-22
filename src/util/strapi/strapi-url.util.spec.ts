import { describe, test, expect } from "vitest"
import { StrapiUrl } from "@/util/strapi/strapi-url.util"

describe("strapi-url.util.ts", () => {
  const url = "http://localhost:1337/api"

  describe("setEndpoint", () => {
    test("should set endpoint if allowed", () => {
      const expected = StrapiUrl.setEndpoint(url, "posts")
      expect(expected).toEqual("http://localhost:1337/api/posts")
    })

    test("should not set endpoint if allowed", () => {
      test("should set endpoint if allowed", () => {
        const expected = StrapiUrl.setEndpoint(url, "users")
        expect(expected).toEqual("http://localhost:1337/api")
      })
    })
  })

  describe("addFilters", () => {
    test("should add filter", () => {
      const filters = ["[slug][$eq]=my-blog-post"]
      const expected = StrapiUrl.addFilters(url, filters)
      expect(expected).toEqual(
        "http://localhost:1337/api?filters[slug][$eq]=my-blog-post"
      )
    })

    test("should add multiple filter", () => {
      const filters = [
        "[slug][$eq]=my-blog-post",
        "[slug][$eq]=my-second-blog-post",
      ]
      const expected = StrapiUrl.addFilters(url, filters)
      expect(expected).toEqual(
        "http://localhost:1337/api?filters[slug][$eq]=my-blog-post&[slug][$eq]=my-second-blog-post"
      )
    })

    test("should not add filter", () => {
      const filters: string[] = []
      const expected = StrapiUrl.addFilters(url, filters)
      expect(expected).toEqual("http://localhost:1337/api")
    })
  })
})
