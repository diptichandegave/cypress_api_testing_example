# cypress_api_testing_example

This project demonstrates how to use cypress test automation framework to test API. This solution is tested with chrome and electron browsers which covers following scenarios

    - Verify when user access API it should work properly
    - Verify each band should have festival name
    - Verify all text follows pascal case
    - Verify festivals names are unique
    - Verify band names are unique under each festival

## Prerequisite:

- Node.js (Download Link : https://nodejs.org/en/download/)
- Chrome

## Cypress Directory Structure	
- Feature Files should be under `cypress-test-automation-example\cypress\integration\features\*.feature*`.
- Step definitions should be kept under `cypress-test-automation-example\cyprss\support\step_definitions\*.js`.
- Config File should be kept under the folders `cypress-test-automation-example\cypress\plugins\index.js`.
- Page Object Models can be found under `cypress-test-automation-example\cypress\support\pages\*.js`.
- Reports are generated under `cypress-test-automation-example\cypress\reports\*.xml` after test execution.
- Results of the Reports are generated under `cypress-test-automation-example\cypress\results\cucumber-json\*.json` after test execution
- Videos of Test Execution generated under `cypress-test-automation-example\cypress\videos\features\*.feature.mp4` after test execution.	

## To execute the automation suite:

- Clone this repository
- Install dependencies
```
cd cypress-test-automation-example
npm install
```
- To run test suite (This will run test suite with default cypress browser Electron in headless mode)
```
npx cypress run
```
- To run test suite with cypress test runner and different browser
	- Open cypress test runner
	```
	npx cypress open
	```
	- Execute test by clicking on feature file in cypress test runner
- To generate BDD report
 ```
 npm run generateHTMLReport
 ```
 - Once test execution is completed, video recording of execution can be found at 'cypress-api-automation-example\cypress\videos\features'

## Troubleshooting Steps:
- Below are some of the troubleshooting steps to be followed in case of different errors
1. Error about execution policy
	- Open Windows Powershell with Run as Administrator
	- Run command Set-ExecutionPolicy RemoteSigned
	- Type 'Yes' 
	- Again try running ```npx cypress open```
	
2. Error Cypress Verification Timed out then follow below steps.
	```
		npx cypress verify
	```

3. Error while launching chrome browser in cypress test runner, just try re-running the test