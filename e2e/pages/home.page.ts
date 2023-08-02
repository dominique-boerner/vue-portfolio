import type { Page } from "@playwright/test"
import { expect } from "@playwright/test"

export class HomePage {
  private readonly page: Page

  private readonly selectors = {
    themeToggleButton: "theme-toggle-button",
    themeContainer: "theme-container",
  }

  constructor(page: Page) {
    this.page = page
  }

  async goto() {
    await this.page.goto("/")
  }

  async clickThemeToggle() {
    await this.page.getByTestId(this.selectors.themeToggleButton).click()
  }

  async isDarkTheme() {
    const hasDarkClass = await this.page
      .getByTestId("theme-container")
      .evaluate((el) => el.classList.contains("dark"))

    await expect(hasDarkClass).toBeTruthy()
  }

  async isLightTheme() {
    const hasLightClass = await this.page
      .getByTestId("theme-container")
      .evaluate((el) => el.classList.contains("light"))

    await expect(hasLightClass).toBeTruthy()
  }
}
