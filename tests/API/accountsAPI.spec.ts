import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../pages/registerPage";
import { OpenAccountPage } from "../../pages/openAccountPage";

test("TC-03 Verify Account API Returns 200", async ({ page, request }) => {
  const registerPage = new RegisterPage(page);
  const openAccountPage = new OpenAccountPage(page);

  const username = `dhruvil${Date.now()}`;
  const password = "123456789";

  await registerPage.goto();
  await registerPage.registerUser(username, password);

  await openAccountPage.openNewAccountPage();
  const accountId = await openAccountPage.createAccount("1");

  const response = await request.get(
    `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`,
  );

  expect(response.status()).toBe(200);
});

test("TC-04 Verify Account Type Exists", async ({ page, request }) => {
  const registerPage = new RegisterPage(page);
  const openAccountPage = new OpenAccountPage(page);

  const username = `dhruvil${Date.now()}`;
  const password = "123456789";

  await registerPage.goto();
  await registerPage.registerUser(username, password);

  await openAccountPage.openNewAccountPage();
  const accountId = await openAccountPage.createAccount("1");

  const response = await request.get(
    `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`,
  );

  const body = await response.text();

  expect(body).toContain("<type>");
});

test("TC-05 Verify Account Balance Exists", async ({ page, request }) => {
  const registerPage = new RegisterPage(page);
  const openAccountPage = new OpenAccountPage(page);

  const username = `dhruvil${Date.now()}`;
  const password = "123456789";

  await registerPage.goto();
  await registerPage.registerUser(username, password);

  await openAccountPage.openNewAccountPage();
  const accountId = await openAccountPage.createAccount("1");

  const response = await request.get(
    `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`,
  );

  const body = await response.text();

  expect(body).toContain("<balance>");
});
