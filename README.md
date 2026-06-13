# Parabank Automation Testing Project

## Project Overview

This project is an automation testing framework developed using Playwright and TypeScript for the Parabank application.

The framework covers UI testing, API testing, Hybrid testing, Negative testing, and basic Performance testing. Page Object Model (POM) design pattern is used to improve code maintainability and reusability.

---

## Tools and Technologies

* Playwright
* TypeScript
* Node.js
* Git & GitHub
* GitHub Actions
* Allure Report
* Playwright HTML Report

---

## Framework Structure

## Framework Structure

```text
parabankCapstone
│
├── pages
│   ├── loginPage.ts
│   ├── registerPage.ts
│   ├── openAccountPage.ts
│   ├── transferFundsPage.ts
│   └── accountsOverviewPage.ts
│
├── tests
│   ├── UI
│   ├── API
│   ├── hybrid
│   └── performanceLite
│
├── documents
├── screenshots
├── .github/workflows
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Test Coverage

### UI Tests

* Register new user
* User login
* Create savings account
* Create checking account
* Transfer funds
* Verify transfer confirmation message
* Verify source account balance update
* Verify destination account balance update
* Verify invalid login
* Transfer funds without amount

### API Tests

* Verify account exists in API
* Verify account type in API
* Verify account balance in API
* Verify invalid account API request

### Hybrid Tests

* Create account via UI and validate via API
* Transfer funds via UI and validate via API
* Verify balance difference after transfer

### Performance Tests

* Verify API response time
* Verify 20 concurrent API requests

---

## Test Execution Summary

| Test Type   | Count |
| ----------- | ----- |
| UI          | 9     |
| API         | 4     |
| Hybrid      | 3     |
| Performance | 2     |
| Total       | 18    |

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Dhruvil-here/parabankCapstone.git
```

Move to project directory:

```bash
cd parabankCapstone
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Run Tests

Run complete test suite:

```bash
npx playwright test
```

Run UI tests:

```bash
npx playwright test tests/UI
```

Run API tests:

```bash
npx playwright test tests/API
```

Run Hybrid tests:

```bash
npx playwright test tests/hybrid
```

Run Performance tests:

```bash
npx playwright test tests/performanceLite
```

---

## Playwright HTML Report

Generate and open Playwright report:

```bash
npx playwright show-report
```

---

## Allure Report

Generate Allure report:

```bash
npx allure generate ./allure-results --clean
```

Open Allure report:

```bash
npx allure open
```

---

## CI/CD Integration

GitHub Actions is configured to automatically execute API and Hybrid test suites whenever code is pushed to the repository.

Workflow file:

```text
.github/workflows/playwright.yml
```

---

## Documents Included

* Test Scenarios
* Test Cases
* RTM (Requirement Traceability Matrix)
* Test Execution Screenshots
* Allure Report Screenshots
* GitHub Actions Screenshots

---

## Author

Dhruvil Gautam

Capgemini Automation Testing Capstone Project
