﻿# API Automation with SuperTest, Mocha, and Chai

Welcome to the API automation example project, brought to you by the one and only Shidqi Adiatma

## Project Overview

This project is designed to showcase the seamless integration of various cutting-edge tools for API testing. We have employed the following technologies:

- **Mocha**: A feature-rich JavaScript test framework that makes asynchronous testing simple and enjoyable.

- **Chai**: An assertion library for Node.js and browsers that can be paired with any testing framework.

- **Chai-JSON-Schema**: A Chai plugin for asserting JSON schemas to ensure your API responses meet expectations.

- **SuperTest**: A powerful HTTP assertion library that works seamlessly with SuperAgent for making HTTP requests during testing.

- **Mochawesome**: A stylish HTML reporter for Mocha that provides a clear and concise representation of test results.

- **Rimraf**: A Node.js module to clean up directories with ease.

- **To-JSON-Schema**: A tool to generate JSON schema from a given object.

- **Faker.js**: A library for generating fake data such as names, addresses, and emails.

- **NYC**: A tool for tracking code coverage in JavaScript programs.

## Getting Started

To get started, follow these simple steps:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/shidqiadiatma/api-automation-supertest-mocha-js
```

2. Install project dependencies.

```bash
npm install
```

## Running the Tests

Execute the following commands to run different sets of tests:

- Run all tests:

```bash
npm run test
```

- Run specific test suites:

```bash
npm run test-auth
npm run test-user
```

- Run tests by tag:

```bash
npm run test -- --grep "@RegisterUser"
npm run test -- --grep "@AuthorizedUser"
npm run test -- --grep "@GenerateTokenUser"
npm run test -- --grep "@GetUser"
npm run test -- --grep "@DeleteUser"
npm run test -- --grep "@Get"
npm run test -- --grep "@Post"
npm run test -- --grep "@Delete"
```

- Run tests by coverage:

```bash
npm run coverage
```

- Generate coverage report:

```bash
npm run reportCoverage
```

## Test Documentation

The API documentation is available via Swagger at [Bookstore API Documentation](https://bookstore.toolsqa.com/swagger/). Familiarize yourself with the API endpoints and structures before diving into the tests.
