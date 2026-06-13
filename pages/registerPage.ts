import { Page } from "@playwright/test";

export class RegisterPage {
    constructor(private page: Page) {}
    async goto() {
        await this.page.goto('https://parabank.parasoft.com/parabank/register.htm');
    }

    async registerUser(username: string, password: string) {
        await this.page.locator('#customer\\.firstName').fill('Dhruvil');
        await this.page.locator('#customer\\.lastName').fill('Gautam');
        await this.page.locator('#customer\\.address\\.street').fill('anupam apartments');
        await this.page.locator('#customer\\.address\\.city').fill('Jaipur');
        await this.page.locator('#customer\\.address\\.state').fill('Rajasthan');
        await this.page.locator('#customer\\.address\\.zipCode').fill('302071');
        await this.page.locator('#customer\\.phoneNumber').fill('1234567890');
        await this.page.locator('#customer\\.ssn').fill(`${Date.now()}`);
        await this.page.locator('#customer\\.username').fill(username);
        await this.page.locator('#customer\\.password').fill(password);
        await this.page.locator('#repeatedPassword').fill(password);
        await this.page.locator('input[value="Register"]').click();
    }
}