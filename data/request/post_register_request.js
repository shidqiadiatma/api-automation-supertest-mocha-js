const { randomUsernameGetUser, randomUsernameDeleteUser  } = require('../../helpers/generateRandom/generate');
const requestRegister = {
	success1: {
		userName: randomUsernameGetUser,
		password: 'passWord123*'
	},
	success2: {
		userName: randomUsernameDeleteUser,
		password: 'passWord123*'
	}
};

module.exports = { requestRegister };