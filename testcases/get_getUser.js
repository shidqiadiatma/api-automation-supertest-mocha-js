const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-json-schema'));
const { before } = require('mocha');
const { tag } = require('../helpers/tag/get_getUser_tag');
const { connectGetUser } = require('../helpers/connector/get_getUser_connect')
const { connectRegister } = require('../helpers/connector/post_register_connect');
const { requestRegister } = require('../data/request/post_register_request');
const { connectGenerateToken } = require('../helpers/connector/post_generateToken_connect');
const { requestGenerateToken } = require('../data/request/post_generateToken_request');
const { connectAuthorized } = require('../helpers/connector/post_authorizedUser_connect');
const { requestAuthorized } = require('../data/request/post_authorizedUser_request');
const { dataGetUser } = require('../data/dataRequest.js');
const { schema } = require('../data/schema/schema');
const { jsonSchemaHelper } = require('../helpers/to-json-schema.helper');

module.exports = function () {
global.userID = '';
global.token = '';

describe(`${tag.method} | ${tag.description} | ${tag.path}`, function () {
	before('', async function () {
		const result1 = await connectRegister(requestRegister.success1);
		userID = result1.body.userID
		const result2 = await connectGenerateToken(requestGenerateToken.success1);
		token = result2.body.token
		await connectAuthorized(requestAuthorized.success1);

		dataGetUser[0].body.userID = userID
		dataGetUser[0].body.token = token
	})
	dataGetUser.forEach(data => {
		it(data.cases.name, async function () {
			const result = await connectGetUser(data.body.userID, data.body.token);
			expect(result.status).to.equal(data.cases.httpStatus);
			expect(result.body).to.be.jsonSchema(jsonSchemaHelper(new schema().getUser(), data.cases.schema));
		});
	})
})
}