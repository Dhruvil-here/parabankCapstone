import { test, expect } from "@playwright/test";

test("TC-14 Invalid Account API Request", async ({ request }) => {
  const response = await request.get(
    "https://parabank.parasoft.com/parabank/services/bank/accounts/99999999",
  );

  expect(response.status()).toBe(400);
  const body = await response.text();
  expect(body).toContain("Could not find account");
});
