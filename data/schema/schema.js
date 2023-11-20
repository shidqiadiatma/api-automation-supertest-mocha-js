const { randomUsername, randomUsernameGetUser } = require('../../helpers/generateRandom/generate');
const { dataGetUser } = require('../../data/dataRequest');
class schema {
    register() {
        // The API return response with unstable data
        // So this is need to make differents response schema for each case
        return {
            success_with_valid_username_password: {
                userID: '',
                username: randomUsername,
                books: []
            },
            failed_with_invalid_password_format: {
                code: "1300",
		        message: "Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer."
            },
            failed_with_already_username: {
                code: "1204",
                message: 'User exists!'
            }
        }
    }
    generateToken() {
        // The API return response with unstable data
        // So this is need to make differents response schema for each case
        return {
            success_with_valid_username_password: {
                status: 'Success',
                result: 'User authorized successfully.'
            },
            failed_with_invalid_username: {
                status: 'Failed',
                result: 'User authorization failed.'
            },
            failed_with_wrong_password: {
                status: 'Failed',
                result: 'User authorization failed.'
            }
        }
    }
    authUser() {
        // The API return response with unstable data
        // So this is need to make differents response schema for each case
        return {
            success_with_valid_username_password: 
               true 
            ,
            failed_with_invalid_username_password: {
                code: '1207',
                message: 'User not found!'
            },
            failed_with_empty_data: {
                code: '1200',
                message: 'UserName and Password required.'
            }
        }
    }
    getUser() {
        // The API return response with unstable data
        // So this is need to make differents response schema for each case
        return {
            success_with_valid_userid_token: {
                userId: dataGetUser[0].body.userID,
                username: randomUsernameGetUser
            },
            failed_with_invalid_token: {
                code: '1200',
                message: 'User not authorized!'
            },
            failed_with_invalid_userid: {
                code: '1207',
                message: 'User not found!'
            }
        }
    }
    deleteUser() {
        // The API return response with unstable data
        // So this is need to make differents response schema for each case
        return {
            success_with_valid_userid_token: {
            },
            failed_with_invalid_token: {
                code: '1200',
                message: 'User not authorized!'
            },
            failed_with_invalid_userid: {
                code: '1207',
                message: 'User not found!'
            }
        }
    }
}


module.exports = { schema }