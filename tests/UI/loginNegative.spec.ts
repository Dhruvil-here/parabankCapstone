import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";

test("TC-13 : Verify Invalid Login Shows Error Message", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("invalidUser", "invalidPassword");
  await expect(page.locator("#rightPanel")).toContainText("Error");
});
