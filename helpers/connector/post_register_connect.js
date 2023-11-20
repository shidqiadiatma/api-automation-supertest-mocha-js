const supertest = require('supertest');
const { baseUrl, path } = require('../../data/path');

const api = supertest(baseUrl);

function connectRegister(payload) {
	return api.post(path.register)
		.set('Content-Type', 'application/json')
		.send(payload);
}

module.exports = { connectRegister };