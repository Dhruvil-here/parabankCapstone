import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../pages/registerPage";
import { OpenAccountPage } from "../../pages/openAccountPage";

test("TC-PERF-01 Verify API Response Time", async ({ page, request }) => {
  const registerPage = new RegisterPage(page);
  const openAccountPage = new OpenAccountPage(page);

  const username = `dhruvil${Date.now()}`;
  const password = "123456789";

  await registerPage.goto();
  await registerPage.registerUser(username, password);

  await openAccountPage.openNewAccountPage();
  const accountId = await openAccountPage.createAccount("1");

  console.log("Created Account:", accountId);

  const startTime = Date.now();

  const response = await request.get(
    `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`,
  );

  const endTime = Date.now();

  const responseTime = endTime - startTime;

  console.log("Response Time:", responseTime, "ms");

  expect(response.status()).toBe(200);
  expect(responseTime).toBeLessThan(2000);
});

test("TC-PERF-02 Verify 20 Concurrent API Requests", async ({
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
  const accountId = await openAccountPage.createAccount("1");

  console.log("Created Account:", accountId);

  const requests = [];

  const startTime = Date.now();

  for (let i = 0; i < 20; i++) {
    requests.push(
      request.get(
        `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`,
      ),
    );
  }

  const responses = await Promise.all(requests);

  const endTime = Date.now();

  const totalTime = endTime - startTime;

  console.log("20 Requests Completed In:", totalTime, "ms");

  const successfulResponses = responses.filter(
    (response) => response.status() === 200,
  );

  console.log("Successful Requests:", successfulResponses.length);

  expect(successfulResponses.length).toBeGreaterThan(15);

  expect(totalTime).toBeLessThan(3000);
});
