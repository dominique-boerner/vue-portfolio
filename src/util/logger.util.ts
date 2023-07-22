import { isDevelopment } from "@/util/app.util"

/**
 * LoggerUtil is a utility that provides logging functions for information and errors.
 * @property {LoggerUtil.info} info - Logs information to the console in development mode.
 * @property {LoggerUtil.error} error - Logs errors to the console in development mode.
 */
const LoggerUtil = () => {
  /**
   * Information logging function.
   * @param {string} filename - The filename or source of the log.
   * @param {string} func - The name of the function or method generating the log.
   * @param {*} info - The information or data to be logged.
   * @returns {void}
   */
  const info = (filename: string, func: string, info: any) => {
    const timestamp = new Date().toISOString()
    if (isDevelopment()) {
      console.info(`[${timestamp}]: (${filename}:${func}) => ${info}`)
    }
  }

  /**
   * Error logging function.
   * @param {string} filename - The filename or source of the log.
   * @param {string} func - The name of the function or method generating the log.
   * @param {*} info - The error information or data to be logged.
   * @returns {void}
   */
  const error = (filename: string, func: string, info: any) => {
    const timestamp = new Date().toISOString()
    if (isDevelopment()) {
      console.error(`[${timestamp}]: (${filename}:${func}) => ${info}`)
    }
  }

  return {
    info,
    error,
  }
}

export const Logger = LoggerUtil()
