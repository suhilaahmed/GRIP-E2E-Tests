# GRIP-E2E-Tests
An End to End Javascript test framework for GRIP web version including bug report, testcases document and test plan.
## Getting Started
These instructions will get you a copy of the framework up and running up and running on your local machine for testing process.
### Prerequisites
Install the latest testcafe using npm
```
npm install -g testcafe
```

## Running the tests
After cloning the framework you will need to run the following steps
### Install node modules
```
npm install
```
### Run tests
you will need to change directory to tests directory then on terminal 

```
cd src/hola/tests
```

#### Chrome
```
testcafe chrome login-tests.js --reporter html:../reports/reports.html assertion-timeout 20000
```
#### Safari
```
testcafe safari login-tests.js --reporter html:../reports/reports.html assertion-timeout 20000
```

#### Firefox
```
testcafe firefox login-tests.js --reporter html:../reports/reports.html assertion-timeout 20000
```

### Test report
After the test suites are fully executed navigate to reports folder and check report.html to view output report.


## Test Documentation
The repo contians all the needed document for the test plan, bug report and testcases documentation.
