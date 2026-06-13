import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../pages/registerPage";
import { LoginPage } from "../../pages/loginPage";

test("User can login successfully", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const loginPage = new LoginPage(page);

  const username = `dhruvil${Date.now()}`;
  const password = "123456789";

  await registerPage.goto();
  await registerPage.registerUser(username, password);

  await page
    .getByRole("link", {
      name: "Log Out",
    })
    .click();

  await loginPage.login(username, password);

  await expect(
    page.getByRole("link", {
      name: "Log Out",
    }),
  ).toBeVisible();

  await page.screenshot({
    path: "screenshots/login-success.png",
  });
});
