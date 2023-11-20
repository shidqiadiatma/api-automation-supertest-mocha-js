const supertest = require('supertest');
const { baseUrl, path } = require('../../data/path');
const { token } = require('../../testcases/post_generateToken')
const api = supertest(baseUrl);
function connectAuthorized(payload) {
	return api.post(path.authorizedUser)
		.set('Content-Type', 'application/json')
		.set('Authorization', 'Bearer '+token)
		.send(payload);
}
module.exports = { connectAuthorized };