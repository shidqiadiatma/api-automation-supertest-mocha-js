const { randomUsernameGetUser, randomUsernameDeleteUser  } = require('../../helpers/generateRandom/generate');
const requestGenerateToken = {
	success1: {
		userName: randomUsernameGetUser,
		password: 'passWord123*'
	},
	success2: {
		userName: randomUsernameDeleteUser,
		password: 'passWord123*'
	}
};
module.exports = { requestGenerateToken };