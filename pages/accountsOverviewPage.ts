import { Page } from "@playwright/test";

export class AccountsOverviewPage {
  constructor(private page: Page) {}
  async openAccountsOverview() {
    await this.page.getByRole("link", { name: "Accounts Overview" }).click();
  }

  async getAccountBalanceByRow(rowIndex: number) {
    const balanceText = await this.page
      .locator("tbody tr")
      .nth(rowIndex)
      .locator("td")
      .nth(1)
      .textContent();
    return Number(balanceText?.replace("$", ""));
  }
}
