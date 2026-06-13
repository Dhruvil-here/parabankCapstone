import { Page } from "@playwright/test";

export class TransferFundsPage {
  constructor(private page: Page) {}

  async openTransferFundsPage() {
    await this.page
      .getByRole("link", {
        name: "Transfer Funds",
      })
      .click();
  }

  // for ui tests
  async transferFunds(amount: string) {
    await this.page.locator("#amount").fill(amount);
    await this.page.locator("#fromAccountId").selectOption({ index: 0 });
    await this.page.locator("#toAccountId").selectOption({ index: 1 });
    await this.page.locator('input[value="Transfer"]').click();
  }

  // for hybrid tests
  async transferFundsBetweenAccounts(
    amount: string,
    fromAccount: string,
    toAccount: string,
  ) {
    await this.page.locator("#amount").fill(amount);
    await this.page.locator("#fromAccountId").selectOption(fromAccount);
    await this.page.locator("#toAccountId").selectOption(toAccount);
    console.log(
      "From Account:",
      await this.page.locator("#fromAccountId").inputValue(),
    );
    console.log(
      "To Account:",
      await this.page.locator("#toAccountId").inputValue(),
    );
    await this.page.locator('input[value="Transfer"]').click();
  }
}
