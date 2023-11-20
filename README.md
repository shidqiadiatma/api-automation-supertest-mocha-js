# API Automation with SuperTest, Mocha, and Chai

Welcome to the API automation test example project using SuperTest, Mocha, Chai, and other powerful tools. This project is designed to help you create and execute robust API tests effortlessly.

## Project Components
- **Mocha:** A feature-rich JavaScript test framework that makes asynchronous testing simple.
- **Chai:** An assertion library that provides a clean and expressive syntax for creating assertions.
- **Chai-Json-Schema:** A Chai plugin for asserting JSON schemas, ensuring API response conformity.
- **SuperTest:** A library for HTTP assertions, making API testing seamless.
- **Mochawesome:** A stylish HTML reporter for Mocha test results.
- **Rimraf:** A tool for deleting files and directories, useful for cleaning up before test runs.
- **To-Json-Schema:** A tool for generating JSON schemas from sample JSON data.
- **Faker-JS/Faker:** A library for generating fake data, aiding in creating diverse test scenarios.
- **NYC:** A code coverage tool to keep your codebase in check.

## Getting Started
To get started, install the project dependencies using the following command:

```bash
npm install
```

## Running Tests
Execute all tests with the following command:

```bash
npm run test-all
```

Run specific test suites:

```bash
npm run test-auth
npm run test-user
```

Run tests by tags:

```bash
npm run test -- --grep "@Positive"
```

## Additional Information
Feel free to explore and customize the project to suit your needs. Dive into the individual test files, leverage Faker for dynamic test data, and extend the project as your API testing demands grow.

Happy testing! 🚀