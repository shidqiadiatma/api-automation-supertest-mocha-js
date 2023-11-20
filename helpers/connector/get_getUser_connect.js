const supertest = require('supertest');
const { baseUrl, path } = require('../../data/path');
const api = supertest(baseUrl);

function connectGetUser(userID, token) {
		return api.get(path.getAndDeleteUser + userID)
		.set('Authorization', 'Bearer ' + token)
	}
module.exports = { connectGetUser };