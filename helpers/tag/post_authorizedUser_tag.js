const { path } = require('../../data/path');
const tag = {
	description: '@Post @AuthorizedUser',
	method: 'POST',
	path: `${path.authorizedUser}`,
};
module.exports = { tag };