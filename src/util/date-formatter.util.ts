import { Logger } from "@/util/logger.util"

export const DATE_FORMAT: Intl.DateTimeFormatOptions = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
}

const isStringValidDate = (dateValue: string): boolean => {
  return !isNaN(Date.parse(dateValue))
}

/**
 * Format a value into a locale date string.
 * @param value the value of the date.
 */
export const toLocaleDateString = (value: string): string => {
  if (!isStringValidDate(value)) {
    Logger.info(
      "logger.util.ts",
      "toLocaleDateString",
      `'${value}' is not a valid string. Valid format: YYYY-MM-DDTHH:mm:ss.sssZ.`
    )
    return ""
  }

  return new Date(value).toLocaleDateString(undefined, DATE_FORMAT)
}
