import { test } from "@playwright/test"
import { HomePage } from "../pages/home.page"

test("it should toggle the theme", async ({ page }) => {
  const homePage = new HomePage(page)

  await homePage.goto()

  // we toggle the theme to dark
  await homePage.clickThemeToggle()
  await homePage.isDarkTheme()

  // we toggle the theme back to light
  await homePage.clickThemeToggle()
  await homePage.isLightTheme()
})
