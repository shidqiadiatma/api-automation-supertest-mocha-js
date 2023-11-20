const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-json-schema'));
const { connectAuthorized } = require('../helpers//connector/post_authorizedUser_connect');
const { tag } = require('../helpers/tag/post_authorizedUser_tag');
const { dataAuth } = require('../data/dataRequest.js');
const { schema } = require('../data/schema/schema');
const { jsonSchemaHelper } = require('../helpers/to-json-schema.helper');

module.exports = function () {
describe(`${tag.method} | ${tag.description} | ${tag.path}`, function () {
	dataAuth.forEach(data => {
		it(data.cases.name, async function () {
			const result = await connectAuthorized(data.body);
			expect(result.status).to.equal(data.cases.httpStatus);
			expect(result.body).to.be.jsonSchema(jsonSchemaHelper(new schema().authUser(), data.cases.schema));
		});
	})
})
}