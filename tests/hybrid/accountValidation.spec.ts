import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../pages/registerPage";
import { OpenAccountPage } from "../../pages/openAccountPage";

test("TC-10 : Create Account via UI and Validate via API", async ({
  page,
  request,
}) => {
  const registerPage = new RegisterPage(page);
  const openAccountPage = new OpenAccountPage(page);

  const username = `dhruvil${Date.now()}`;
  const password = "123456789";

  await registerPage.goto();
  await registerPage.registerUser(username, password);

  await openAccountPage.openNewAccountPage();
  await openAccountPage.createAccount("1");

  await expect(page.locator("#newAccountId")).toBeVisible();

  const accountId = await page.locator("#newAccountId").innerText();

  console.log("Created Account ID:", accountId);

  const response = await request.get(
    `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`,
  );

  expect(response.status()).toBe(200);
  const body = await response.text();
  console.log(body);

  expect(body).toContain(`<id>${accountId}</id>`);
  expect(body).toContain("<type>SAVINGS</type>");
  expect(body).toContain("<balance>");

  await page.screenshot({
    path: "screenshots/AccountCreated.png",
  });
});
