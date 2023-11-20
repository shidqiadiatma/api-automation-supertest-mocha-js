const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-json-schema'));
const { connectRegister } = require('../helpers/connector/post_register_connect');
const { tag } = require('../helpers/tag/post_register_tag');
const { dataRegister } = require('../data/dataRequest.js');
const { schema } = require('../data/schema/schema');
const { jsonSchemaHelper } = require('../helpers/to-json-schema.helper');

module.exports = function () {
describe(`${tag.method} | ${tag.description} | ${tag.path}`, function () {
	dataRegister.forEach(data => {
		it(data.cases.name, async function () {
			const result = await connectRegister(data.body);
			expect(result.status).to.equal(data.cases.httpStatus);
			expect(result.body).to.be.jsonSchema(jsonSchemaHelper(new schema().register(), data.cases.schema));
		});
	})
})
}