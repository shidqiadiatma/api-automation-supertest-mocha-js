const { path } = require('../../data/path');
const tag = {
	description: '@Get @GetUser',
	method: 'GET',
	path: `${path.getAndDeleteUser}{userID}`
};
module.exports = { tag };