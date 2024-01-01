# Cypress Test Suite for OrangeHRM

This repository contains Cypress tests for validating some functionality on the OrangeHRM website.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Cypress](https://www.cypress.io/) installed. You can install it using the command `npm install cypress --save-dev`.

## Running the Tests

1. Clone this repository:
   git clone <repository-url>
2. Navigate to the project directory cd <project-directory>
3. Install dependencies: npm install
4. Open Cypress: npx cypress open
5. In the Cypress Test Runner, click on the test file (your-test-file.spec.ts) you want to run.

## Notes
OrangeHRM site does not have test ids to capture the elements. It's very important to have unique test ids in UI automation. Otherwise if something changes in the dom tests will break.



