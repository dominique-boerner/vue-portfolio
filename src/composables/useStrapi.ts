import type { StrapiResponse } from "@api/types/types"
import { StrapiUrl } from "@/util/strapi/strapi-url.util"

/**
 * Composable for interaction with the strapi backend.
 */
export function useStrapi() {
  const BASE_URL = "http://localhost:1337/api"

  /**
   * Find strapi content via endpoint.
   * @param endpoint
   * @param filters
   */
  const find = async <T>(
    endpoint: string,
    filters?: string[]
  ): Promise<StrapiResponse<T>> => {
    let responseUrl = BASE_URL

    responseUrl = StrapiUrl.setEndpoint(responseUrl, endpoint)

    if (filters) {
      responseUrl = StrapiUrl.addFilters(responseUrl, filters)
    }

    const response = await fetch(responseUrl)
    return (await response.json()) as StrapiResponse<T>
  }

  return {
    find,
  }
}
