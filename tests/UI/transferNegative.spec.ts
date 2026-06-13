import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../pages/registerPage";
import { TransferFundsPage } from "../../pages/transferFundsPage";

test("TC-15 Transfer Funds Without Amount", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const transferFundsPage = new TransferFundsPage(page);
  const username = `dhruvil${Date.now()}`;
  const password = "Test@123";

  await registerPage.goto();
  await registerPage.registerUser(username, password);
  await transferFundsPage.openTransferFundsPage();
  await page.locator("#amount").fill("");
  await page.locator('input[value="Transfer"]').click();
  await page.screenshot({
    path: "screenshots/TC15.png",
  });
});
