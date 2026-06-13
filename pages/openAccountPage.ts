import { Page, expect } from "@playwright/test";

export class OpenAccountPage {
  constructor(private page: Page) {}

  async openNewAccountPage() {
    await this.page.getByRole("link", { name: "Open New Account" }).click();
  }

  async createAccount(accountType: string) {
    await this.page.locator("#type").selectOption(accountType);
    await this.page.locator("#fromAccountId").selectOption({ index: 0 });
    await this.page.locator('input[value="Open New Account"]').click();
    await expect(this.page.locator("#newAccountId")).toBeVisible();
    const accountId = await this.page.locator("#newAccountId").innerText();
    return accountId;
  }
}
