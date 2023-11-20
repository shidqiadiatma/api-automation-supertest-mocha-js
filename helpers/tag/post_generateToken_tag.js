const { path } = require('../../data/path');
const tag = {
	description: '@Post @GenerateTokenUser',
	method: 'POST',
	path: `${path.generateToken}`,
};
module.exports = { tag };