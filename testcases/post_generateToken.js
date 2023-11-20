const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-json-schema'));
const { connectGenerateToken } = require('../helpers/connector/post_generateToken_connect');
const { tag } = require('../helpers/tag/post_generateToken_tag');
const { dataGtoken } = require('../data/dataRequest.js');
const { schema } = require('../data/schema/schema');
const { jsonSchemaHelper } = require('../helpers/to-json-schema.helper');

module.exports = function () {
describe(`${tag.method} | ${tag.description} | ${tag.path}`, function () {
	dataGtoken.forEach(data => {
		it(data.cases.name, async function () {
			const result = await connectGenerateToken(data.body);
			expect(result.status).to.equal(data.cases.httpStatus);
			expect(result.body).to.be.jsonSchema(jsonSchemaHelper(new schema().generateToken(), data.cases.schema));
		});
	})
})
}