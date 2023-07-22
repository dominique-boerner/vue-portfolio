import { Logger } from "@/util/logger.util"
import { StrapiApi } from "@/util/strapi/strapi-api.util"

/**
 * Utility for generating Strapi API URLs.
 *
 * @property {StrapiUrlUtil.setEndpoint} setEndpoint - Set the URLs endpoint.
 * @property {StrapiUrlUtil.addFilters} addFilters - Set the URLs filters.
 */
const StrapiUrlUtil = () => {
  /**
   * Set the endpoint to a given URL.
   *
   * @param {string} url - The base URL to which the endpoint will set.
   * @param {string} endpoint - The endpoint to set to the URL.
   * @returns {string} The URL with the endpoint set.
   */
  const setEndpoint = (url: string, endpoint: string) => {
    if (!StrapiApi.isEndpointAllowed(endpoint)) {
      Logger.error(
        "strapi-url.util.ts",
        "setEndpoint",
        `Endpoint '${endpoint}' is not allowed.`
      )
    }

    return `${url}/${endpoint}`
  }

  /**
   * Appends filter parameters to a given URL.
   *
   * @param {string} url - The base URL to which the filters will be appended.
   * @param {string[]} filters - The filters to append to the URL.
   * @returns {string} The URL with the filter parameters appended.
   */
  const addFilters = (url: string, filters: string[]) => {
    const preparedFilters = _prepareFilters(filters)

    if (preparedFilters.length > 0) {
      const filterString = preparedFilters.join("")
      url += `?filters${filterString}`
    }
    return url
  }

  /**
   * Prepare the filter so, that every element except the first has a '&'.
   *
   * @param {string[]} filters - The filters to prepare.
   * @returns {string[]} - The prepared filters for the URL.
   */
  const _prepareFilters = (filters: string[]): string[] => {
    if (!filters) {
      return []
    }

    return filters.map((filter, index) => (index >= 1 ? `&${filter}` : filter))
  }

  return {
    setEndpoint,
    addFilters,
  }
}

export const StrapiUrl = StrapiUrlUtil()
