import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/registerPage';

test('Register new user', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const username = `dhruvil${Date.now()}`;
    const password = '123456789';
    await registerPage.goto();
    await registerPage.registerUser(username,password);
    await expect(page.getByText('Your account was created successfully')).toBeVisible();
});