const { path } = require('../../data/path');
const tag = {
	description: '@Delete @DeleteUser',
	method: 'DELETE',
	path: `${path.getAndDeleteUser}{userID}`,
};
module.exports = { tag };