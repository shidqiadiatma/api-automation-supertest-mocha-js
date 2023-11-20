const supertest = require('supertest');
const { baseUrl, path } = require('../../data/path');
const chai = require('chai');
chai.use(require('chai-json-schema'));
const api = supertest(baseUrl);

function connectDeleteUser(userID, token) {
	return api.delete(path.getAndDeleteUser + userID )
		.set('Authorization', 'Bearer ' + token)
}

module.exports = { connectDeleteUser };