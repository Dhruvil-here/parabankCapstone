import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../pages/registerPage";
import { OpenAccountPage } from "../../pages/openAccountPage";

test("TC - 01 : Register and Create Savings Account (UI)", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const openAccountPage = new OpenAccountPage(page);
  const username = `dhruvil${Date.now()}`;
  const password = "123456789";
  await registerPage.goto();
  await registerPage.registerUser(username, password);
  await expect(
    page.getByText("Your account was created successfully"),
  ).toBeVisible();
  await openAccountPage.openNewAccountPage();
  await openAccountPage.createAccount('1');
  await expect(page.locator("#newAccountId")).toBeVisible();
  const accountId = await page.locator("#newAccountId").textContent();
  console.log("New Account ID:", accountId);
  await page.screenshot({
    path: "screenshots/account-created.png",
  });
});

test('TC-02 Create Checking Account', async ({ page }) => {
    const registerPage = new RegisterPage(page);
  const openAccountPage = new OpenAccountPage(page);
  const username = `dhruvil${Date.now()}`;
  const password = "123456789";
  await registerPage.goto();
  await registerPage.registerUser(username, password);
  await expect(
    page.getByText("Your account was created successfully"),
  ).toBeVisible();
  await openAccountPage.openNewAccountPage();
  await openAccountPage.createAccount('0');
  await expect(page.locator("#newAccountId")).toBeVisible();
  const accountId = await page.locator("#newAccountId").textContent();
  console.log("New Account ID:", accountId);
  await page.screenshot({
    path: "screenshots/account-created.png",
  });
});