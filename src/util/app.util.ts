/**
 * Returns, if the application is running in development mode.
 */
export const isDevelopment = (): boolean => {
  return import.meta.env.DEV
}
