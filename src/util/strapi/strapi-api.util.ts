/**
 * A list of AllowedEndpoints the website can access.
 */
enum AllowedEndpoints {
  POSTS = "posts",
}

/**
 * Utility for general Strapi API.
 *
 * @property {StrapiApiUtil.isEndpointAllowed} isEndpointAllowed - Returns if a given Endpoint is allowed.
 */
const StrapiApiUtil = () => {
  /**
   * Checks if a given endpoint is allowed based on a predefined list of allowed endpoints.
   *
   * @param {string} endpoint - The endpoint to check.
   * @returns {boolean} Returns true if the endpoint is allowed; otherwise, false.
   */
  const isEndpointAllowed = (endpoint: string) => {
    const allowedEndpoints = Object.values(StrapiApi.AllowedEndpoints)
    // @ts-ignore we don't know if endpoint is of type Strapi.AllowedEndpoints.
    return allowedEndpoints.includes(endpoint)
  }

  return {
    isEndpointAllowed,
    AllowedEndpoints,
  }
}

export const StrapiApi = StrapiApiUtil()
