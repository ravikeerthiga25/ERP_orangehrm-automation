# OrangeHRM Automation Framework

##  Project Overview

This project is an automation framework for the OrangeHRM application using Playwright and Cucumber (BDD).

##  Tech Stack

* Playwright
* Cucumber (BDD)
* JavaScript
* Node.js

##  Project Structure

* features/ → Test scenarios (Gherkin)
* pages/ → Page Object Model
* support/ → Hooks & setup

##  How to Run

```bash
npm install
npx cucumber-js
```

##  Test Scenarios

* Login Test
* Add Employee
* Search Employee
* Logout Test

##  Key Features

* Page Object Model (POM)
* Reusable step definitions
* BDD approach using Gherkin

##  Branch Protection
* Require pull request

* Require CI to pass

* Require review before merge

* Prevent direct push to main

## Gating Workflow
  This automation framework acts as a central tester repository for validating frontend (UI) and backend (API) changes before they are merged into the main branch.

## Branch Protection

The `main` branch is protected with the following rules:

- Require a Pull Request before merging.
- Require all GitHub Actions checks to pass.
- Prevent direct pushes to the `main` branch.
- Require at least one reviewer before merging.

This ensures that only validated code reaches the main branch.

## CODEOWNERS

Automation-related changes require review from the Automation Engineer.

Example:

```text
# .github/CODEOWNERS

* @your-github-username
```

This ensures that test automation changes are reviewed before merging.

## Pull Request Checklist

Every Pull Request should include:

- Feature or bug description
- Test impact
- New or updated test cases
- Evidence of successful test execution
- Screenshots or Allure report (if applicable)
