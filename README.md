# E2E-tests
This repository is a test suite containing few E2E tests for Service Hub using Cypress.io

# Pre-requisites
Latest version of node

# Setup
`npm install` or `yarn install`

# Project structure
e2e folder has,
1. The tests folder which contains cypress test files
2. The support folder which contains helper methods(utils.js) and cypress custom commands(commands.js)

# Running tests locally
To run all the tests in cypress default browser(electron)
`npm run run:e2e`

To run all tests in chrome
`npm run run:chrome:e2e`

To run all tests in firefox
`npm run run:firefox:e2e`

To open test execution in cypress dashboard
`npm run open:e2e`
# Running a single test file
To run a single test file:
npx cypress run  --spec "path-to-test-file"

Example: `npx cypress run  --spec "e2e/tests/create_service_version.cy.js"`

# Debugging
## Local
1. The videos and screenshots of failed test execution are stored in the e2e/results folder
2. The test results are stored in the test-results folder
3. The reports are stored in junit-reports folder

## CI/CD
1. The screenshots and video of the test execution will be available to download in the Artifacts section of the job.
2. The mocha test reports should be available to download in the Artifcats section of the job.

# Limitations
1. The tests run only against the US region of the service hub
2. The cypress video and screenshot doesn't seem to work in firefox

# Planned improvements / Tech Debt
1. Configure tests to run in parallel
2. Write clean up code after the tests
3. Add reports in CI/CD
4. Refactor create_service() and create_service_version() methods in utils.js file to use API calls since they are pre-requisites for the subsequent tests
5. Dockerize the test suite
6. Linting and code formatting tools
7. Pre commit hooks

# Assumptions
Assuming that I can create any number of services in my account. Is there a limit? If so, what is it?