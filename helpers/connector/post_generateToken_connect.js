const supertest = require('supertest');
const { baseUrl, path } = require('../../data/path');

const api = supertest(baseUrl);

function connectGenerateToken(payload) {
	return api.post(path.generateToken)
		.set('Content-Type', 'application/json')
		.send(payload);
}

module.exports = { connectGenerateToken };