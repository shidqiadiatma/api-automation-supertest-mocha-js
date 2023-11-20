const baseUrl = 'https://bookstore.toolsqa.com/Account/v1/';
const path = {
	getAndDeleteUser: `User/`,
	register: 'User',
	generateToken: 'GenerateToken',
	authorizedUser: 'Authorized'
};
module.exports = { baseUrl, path };