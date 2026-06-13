import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/registerPage';
import { OpenAccountPage } from '../../pages/openAccountPage';
import { TransferFundsPage } from '../../pages/transferFundsPage';

test('TC-06 : Transfer Funds Between Accounts & TC-07 : Verify Transfer Confirmation Message', async ({ page }) => {

    const registerPage = new RegisterPage(page);
    const openAccountPage = new OpenAccountPage(page);
    const transferFundsPage = new TransferFundsPage(page);

    const username = `dhruvil${Date.now()}`;
    const password = '123456789';

    await registerPage.goto();
    await registerPage.registerUser(username,password);

    await openAccountPage.openNewAccountPage();
    await openAccountPage.createAccount('1');
    await expect(page.locator('#newAccountId')).toBeVisible();

    await openAccountPage.openNewAccountPage();
    await openAccountPage.createAccount('0');
    await expect(page.locator('#newAccountId')).toBeVisible();

    await transferFundsPage.openTransferFundsPage();
    await transferFundsPage.transferFunds('10');

    await expect(page.getByText('Transfer Complete!')).toBeVisible();

    await page.screenshot({
        path: 'screenshots/transferSuccess.png'
    });

});