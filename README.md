# ParaBank Automation Testing Capstone Project

## Project Overview

This project was developed as part of the Capgemini QA Automation Capstone Assessment.

The application under test is ParaBank. The project includes UI Automation, API Testing, Hybrid Testing, and Performance Testing using Playwright with TypeScript.

The framework follows the Page Object Model (POM) design pattern to improve code reusability and maintainability.

## Tools and Technologies Used

* Playwright
* TypeScript
* Node.js
* Visual Studio Code
* Git & GitHub

## Framework Design

The framework is designed using the Page Object Model (POM).

Main Components:

* Page Classes
* UI Test Cases
* API Test Cases
* Hybrid Test Cases
* Performance Test Cases

## Project Structure

parabankCapstone
│
├── pages
│   ├── registerPage.ts
│   ├── loginPage.ts
│   ├── openAccountPage.ts
│   ├── transferFundsPage.ts
│   └── accountsOverviewPage.ts
│
├── tests
│   ├── UI
│   ├── API
│   ├── Hybrid
│   └── performanceLite
│
├── screenshots
├── playwright.config.ts
├── package.json
└── README.md

## Test Coverage

### UI Test Cases

* User Registration
* User Login
* Open Savings Account
* Open Checking Account
* Transfer Funds
* Verify Transfer Confirmation
* Verify Account Balance Updates

### API Test Cases

* Verify Account Exists
* Verify Account Type
* Verify Account Balance
* Verify Invalid Account Request

### Hybrid Test Cases

* Create Account via UI and Validate via API
* Transfer Funds via UI and Validate via API
* Verify Balance Difference After Transfer

### Performance Test Cases

* Verify API Response Time
* Verify 20 Concurrent API Requests

## Functional Requirements Covered

* FR-01 Create New Account
* FR-02 Retrieve Account Information
* FR-03 Validate Account Existence
* FR-04 Validate Account Details
* FR-05 Transfer Funds
* FR-06 Validate Updated Balances
* FR-07 Validate Balance Difference
* FR-08 Verify Success Messages
* FR-09 Verify Negative Scenarios

## How to Install

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## How to Execute Tests

Run all tests:

```bash
npx playwright test
```

Run UI Tests:

```bash
npx playwright test tests/UI
```

Run API Tests:

```bash
npx playwright test tests/API
```

Run Hybrid Tests:

```bash
npx playwright test tests/Hybrid
```

Run Performance Tests:

```bash
npx playwright test tests/performanceLite
```

## Reports

Generate Playwright HTML Report:

```bash
npx playwright show-report
```

## Challenges Faced

* Dynamic account IDs generated during execution
* ParaBank environment resets causing old account IDs to become invalid
* Invalid login scenarios displaying internal error messages
* Handling API validations using dynamically created accounts

## Author

Dhruvil Gautam

Capgemini QA Automation Capstone Project