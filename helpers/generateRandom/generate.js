const { faker } = require('@faker-js/faker');
const randomUsername = "shidqiadiatma-" + faker.number.int(9999999999);
const randomUsernameGetUser = "shidqi-" + faker.number.int(9999999999);
const randomUsernameDeleteUser = "adiatma-" + faker.number.int(9999999999);

module.exports = { randomUsername, randomUsernameGetUser, randomUsernameDeleteUser } ;