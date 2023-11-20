# api-automation-supertest-mocha-js
API automation test example project

- Inside the Project
    - mocha
    - chai
    - chai-json-schema
    - supertest
    - mochawesome
    - rimraf
    - to-json-schema
    - faker-js/faker
    - nyc

- Install Dependencies
    - `npm install`

- Run The Test
    - Run all test
        - `npm run test-all`
    - Run specific test
        - `npm run test-auth`
        - `npm run test-user`
    - Run test by Tag
        - `npm run test -- --grep "@Positive"`