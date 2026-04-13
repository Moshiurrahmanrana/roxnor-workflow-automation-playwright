# Roxnor Automation Test Suite

This repository contains end-to-end UI automation tests for the Roxnor HR/ERP workflows using Playwright.

The goal of this project is to demonstrate practical test automation skills, including:
- structured test organization
- reusable login configuration
- form-heavy workflow automation
- reporting with screenshots and videos

## Tech Stack

- Node.js
- Playwright (`@playwright/test`)
- JavaScript (ES modules)

## What Is Covered

The current suite validates the following business-critical scenarios:

1. **Authentication**
   - User can log in successfully.
   - File: `tests/auth.test.js`

2. **Employee Module**
   - Add a new employee through a multi-step onboarding form.
   - File: `tests/employee.test.js`

3. **Stock Module**
   - Create a stock/product entry and verify success state.
   - File: `tests/stock.test.js`

## Project Structure

```text
roxnor-automation/
├── tests/
│   ├── helpers/
│   │   └── config.js
│   ├── auth.test.js
│   ├── employee.test.js
│   └── stock.test.js
├── playwright.config.js
├── package.json
└── .gitignore
```

## Test Configuration Highlights

- Base URL: `https://microsoft.yosuite.net/`
- Browser: Chromium (Desktop Chrome profile)
- Timeout: 60 seconds
- Artifacts:
  - screenshot: `only-on-failure`
  - video: `on`
- Reporter: HTML (`playwright-report`)

## Prerequisites

- Node.js 18+ (recommended)
- npm

## Setup & Installation

```bash
npm install
npx playwright install
```

## How To Run

Run all tests:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/auth.test.js
```

Run in headed mode (already enabled in config, but can be forced explicitly):

```bash
npx playwright test --headed
```

Open the latest HTML report:

```bash
npx playwright show-report
```

## Notes for Interviewers

- This suite is intentionally focused on realistic, end-to-end user journeys instead of isolated UI checks.
- Tests include dynamic data generation for entities (for example, employee/stock names) to reduce collisions across runs.
- The project currently uses a static credential object in `tests/helpers/config.js` for demo simplicity.
- Typical next improvements in a production setup would be:
  - move credentials to environment variables (`.env`)
  - add Page Object Model for better reusability
  - add CI pipeline execution and artifact publishing
  - add tagging/smoke regression grouping
 
## Result
<img width="897" height="479" alt="image" src="https://github.com/user-attachments/assets/1e6b1ccd-767a-4851-a576-b1966f7d741e" />

## Author

Moshiur Rahman
