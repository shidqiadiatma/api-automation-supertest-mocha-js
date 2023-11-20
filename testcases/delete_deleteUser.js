const chai = require('chai');
const expect = chai.expect;
const { before } = require('mocha');
chai.use(require('chai-json-schema'));
const { tag } = require('../helpers/tag/delete_deleteUser_tag');
const { connectDeleteUser } = require('../helpers/connector/delete_deleteUser_connect')
const { connectRegister } = require('../helpers/connector/post_register_connect');
const { requestRegister } = require('../data/request/post_register_request');
const { connectGenerateToken } = require('../helpers/connector/post_generateToken_connect');
const { requestGenerateToken } = require('../data/request/post_generateToken_request');
const { connectAuthorized } = require('../helpers//connector/post_authorizedUser_connect');
const { requestAuthorized } = require('../data/request/post_authorizedUser_request');
const { dataDeleteUser } = require('../data/dataRequest.js');
const { schema } = require('../data/schema/schema');
const { jsonSchemaHelper } = require('../helpers/to-json-schema.helper');

module.exports = function () {
let userID = '';
let token = '';

describe(`${tag.method} | ${tag.description} | ${tag.path}`, function () {
	before('', async function () {
		const result1 = await connectRegister(requestRegister.success2);
		userID = result1.body.userID
		const result2 = await connectGenerateToken(requestGenerateToken.success2);
		token = result2.body.token
		await connectAuthorized(requestAuthorized.success2);

		dataDeleteUser[0].body.userID = userID
		dataDeleteUser[0].body.token = token
	})

	dataDeleteUser.forEach(data => {
		it(data.cases.name, async function () {
			const result = await connectDeleteUser(data.body.userID, data.body.token);
			expect(result.status).to.equal(data.cases.httpStatus);
			expect(result.body).to.be.jsonSchema(jsonSchemaHelper(new schema().deleteUser(), data.cases.schema));
		});
	})
})
}