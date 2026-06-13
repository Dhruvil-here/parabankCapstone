import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../pages/registerPage";
import { OpenAccountPage } from "../../pages/openAccountPage";
import { TransferFundsPage } from "../../pages/transferFundsPage";

function extractBalance(xml: string): number {
  const match = xml.match(/<balance>(.*?)<\/balance>/);

  return Number(match?.[1]);
}

test('TC-12 : Verify Balance Difference After Transfer via API', async ({
  page,
  request,
}) => {
  const registerPage = new RegisterPage(page);
  const openAccountPage = new OpenAccountPage(page);
  const transferFundsPage = new TransferFundsPage(page);

  const username = `dhruvil${Date.now()}`;
  const password = "123456789";

  await registerPage.goto();
  await registerPage.registerUser(username, password);

  await openAccountPage.openNewAccountPage();
  const savingsAccountId = await openAccountPage.createAccount("1");
  console.log("Savings Account:", savingsAccountId);

  await openAccountPage.openNewAccountPage();
  const checkingAccountId = await openAccountPage.createAccount("0");
  console.log("Checking Account:", checkingAccountId);

  const sourceBeforeResponse = await request.get(
    `https://parabank.parasoft.com/parabank/services/bank/accounts/${savingsAccountId}`,
  );

  const destinationBeforeResponse = await request.get(
    `https://parabank.parasoft.com/parabank/services/bank/accounts/${checkingAccountId}`,
  );

  const sourceBeforeBalance = extractBalance(await sourceBeforeResponse.text());
  const destinationBeforeBalance = extractBalance(
    await destinationBeforeResponse.text(),
  );

  console.log("Source Before:", sourceBeforeBalance);
  console.log("Destination Before:", destinationBeforeBalance);

  await transferFundsPage.openTransferFundsPage();
  await transferFundsPage.transferFundsBetweenAccounts(
    "10",
    savingsAccountId,
    checkingAccountId,
  );

  await expect(page.getByText("Transfer Complete!")).toBeVisible();
  await page.waitForTimeout(3000);

  const sourceAfterResponse = await request.get(
    `https://parabank.parasoft.com/parabank/services/bank/accounts/${savingsAccountId}`,
  );

  const destinationAfterResponse = await request.get(
    `https://parabank.parasoft.com/parabank/services/bank/accounts/${checkingAccountId}`,
  );

  const sourceAfterBalance = extractBalance(await sourceAfterResponse.text());
  const destinationAfterBalance = extractBalance(
    await destinationAfterResponse.text(),
  );

  console.log("Source After:", sourceAfterBalance);
  console.log("Destination After:", destinationAfterBalance);

  const transferAmount = 10;

  expect(sourceAfterBalance).toBe(sourceBeforeBalance - transferAmount);

  expect(destinationAfterBalance).toBe(
    destinationBeforeBalance + transferAmount,
  );
});
