import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/registerPage';
import { OpenAccountPage } from '../../pages/openAccountPage';
import { TransferFundsPage } from '../../pages/transferFundsPage';
import { AccountsOverviewPage } from '../../pages/accountsOverviewPage';

test('TC-08 Verify Source Account Balance Update', async ({ page }) => {

    const registerPage = new RegisterPage(page);
    const openAccountPage = new OpenAccountPage(page);
    const transferFundsPage = new TransferFundsPage(page);
    const accountsOverviewPage = new AccountsOverviewPage(page);

    const username = `dhruvil${Date.now()}`;
    const password = '123456789';

    await registerPage.goto();
    await registerPage.registerUser(username, password);

    await openAccountPage.openNewAccountPage();
    await openAccountPage.createAccount('1');

    await openAccountPage.openNewAccountPage();
    await openAccountPage.createAccount('0');

    await accountsOverviewPage.openAccountsOverview();
    const sourceBefore = await accountsOverviewPage.getAccountBalanceByRow(0);
    console.log('Source Balance Before:',sourceBefore);

    await transferFundsPage.openTransferFundsPage();
    await transferFundsPage.transferFunds('10');

    await accountsOverviewPage.openAccountsOverview();
    const sourceAfter = await accountsOverviewPage.getAccountBalanceByRow(0);
    console.log('Source Balance After:',sourceAfter);

    expect(sourceAfter).toBeLessThan(sourceBefore);
});

test('TC-09 Verify Destination Account Balance Update', async ({ page }) => {

    const registerPage = new RegisterPage(page);
    const openAccountPage = new OpenAccountPage(page);
    const transferFundsPage = new TransferFundsPage(page);
    const accountsOverviewPage = new AccountsOverviewPage(page);

    const username = `dhruvil${Date.now()}`;
    const password = '123456789';

    await registerPage.goto();
    await registerPage.registerUser(username, password);

    await openAccountPage.openNewAccountPage();
    await openAccountPage.createAccount('1');

    await openAccountPage.openNewAccountPage();
    await openAccountPage.createAccount('0');

    await accountsOverviewPage.openAccountsOverview();
    const destinationBefore = await accountsOverviewPage.getAccountBalanceByRow(1);
    console.log('Destination Balance Before:',destinationBefore);

    await transferFundsPage.openTransferFundsPage();
    await transferFundsPage.transferFunds('10');

    await accountsOverviewPage.openAccountsOverview();
    const destinationAfter = await accountsOverviewPage.getAccountBalanceByRow(1);
    console.log('Destination Balance After:',destinationAfter);

    expect(destinationAfter).toBeGreaterThan(destinationBefore);
});