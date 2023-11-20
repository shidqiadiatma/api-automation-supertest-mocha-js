const { randomUsername, randomUsername1, randomUsername2 } = require('../helpers/generateRandom/generate');
const dataRegister= [
    {
        cases: {
            schema: "success_with_valid_username_password",
            name: "BS-1 Verifikasi berhasil membuat user baru",
            httpStatus: 201
        },
        body: {
            "userName": randomUsername,
            "password": 'passWord123*'
        }
    },
    {
        cases: {
            schema: "failed_with_invalid_password_format",
            name: "BS-2 Verifikasi gagal membuat user baru dengan format password yang salah",
            httpStatus: 400
        },
        body: {
            "userName": randomUsername,
            "password": 'invalidformat'
        }
    },
    {
        cases: {
            schema: "failed_with_already_username",
            name: "BS-3 Verifikasi gagal membuat user baru dengan username yang sudah digunakan",
            httpStatus: 406
        },
        body: {
            "userName": 'shidqiadiatma01',
            "password": 'passWord123*'
        }
    },
]

const dataGtoken = [
    {
        cases: {
            schema: "success_with_valid_username_password",
            name: "BS-4 Verifikasi berhasil generate token pada user baru",
            httpStatus: 200,
        },
        body: {
            "userName": randomUsername,
            "password": 'passWord123*'
        }
    },
    {
        cases: {
            schema: "failed_with_invalid_username",
            name: "BS-5 Verifikasi gagal generate token pada username yang tidak valid",
            httpStatus: 200,
        },
        body: {
            "userName": 'invalidusername',
            "password": 'passWord123*'
        }
    },
    {
        cases: {
            schema: "failed_with_wrong_password",
            name: "BS-6 Verifikasi gagal generate token menggunakan password yang tidak valid/salah",
            httpStatus: 200,
        },
        body: {
            "userName": randomUsername,
            "password": 'passwordnyasalah'
        }
    },
]

const dataAuth = [
    {
        cases: {
            schema: "success_with_valid_username_password",
            name: "BS-7 Verifikasi berhasil authorized/login menggunakan credential yang valid",
            httpStatus: 200,
        },
        body: {
            "userName": randomUsername,
            "password": 'passWord123*'
        }
    },
    {
        cases: {
            schema: "failed_with_invalid_username_password",
            name: "BS-8 Verifikasi gagal authorized/login menggunakan credential yang tidak valid (username/password salah)",
            httpStatus: 404,
        },
        body: {
            "userName": 'invalidusername',
            "password": 'invalidpassword'
        }
    },
    {
        cases: {
            schema: "failed_with_empty_data",
            name: "BS-9 Verifikasi gagal authorized/login menggunakan empty string (tidak mengisi semua field)",
            httpStatus: 400,
        },
        body: {
            "userName": '',
            "password": ''
        }
    },
]

let dataGetUser = [
    {
        cases: {
            schema: "success_with_valid_userid_token",
            name: "BS-10 Verifikasi berhasil get user dengan userID yang valid",
            httpStatus: 200,
        },
        body: {
            userID: 'aae06367-6690-40f5-8ab6-1d6f69c56022',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkphbmlzX0hhY2tldHQ3NCIsInBhc3N3b3JkIjoicGFzc1dvcmQxMjMqIiwiaWF0IjoxNjg2MzE2NjgyfQ.AComFsqNdr2ZhKTBBuNEocR7XUuU7WCnznYyerouO4A'
        }
    },
    {
        cases: {
            schema: "failed_with_invalid_token",
            name: "BS-11 Verifikasi gagal get user dengan bearer token yang tidak valid",
            httpStatus: 401,
        },
        body: {
            userID: 'aae06367-6690-40f5-8ab6-1d6f69c56022',
            token: 'invalid'+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkphbmlzX0hhY2tldHQ3NCIsInBhc3N3b3JkIjoicGFzc1dvcmQxMjMqIiwiaWF0IjoxNjg2MzE2NjgyfQ.AComFsqNdr2ZhKTBBuNEocR7XUuU7WCnznYyerouO4A'
        }
    },
    {
        cases: {
            schema: "failed_with_invalid_userid",
            name: "BS-12 Verifikasi gagal get user dengan userID yang tidak valid",
            httpStatus: 401,
        },
        body: {
            userID: 'invalid'+ 'aae06367-6690-40f5-8ab6-1d6f69c56022',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkphbmlzX0hhY2tldHQ3NCIsInBhc3N3b3JkIjoicGFzc1dvcmQxMjMqIiwiaWF0IjoxNjg2MzE2NjgyfQ.AComFsqNdr2ZhKTBBuNEocR7XUuU7WCnznYyerouO4A'
        }
    },
]
let dataDeleteUser = [
    {
        cases: {
            schema: "success_with_valid_userid_token",
            name: "BS-25 Verifikasi berhasil delete user dengan userID yang valid",
            httpStatus: 204,
        },
        body: {
            userID: 'aae06367-6690-40f5-8ab6-1d6f69c56022',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkphbmlzX0hhY2tldHQ3NCIsInBhc3N3b3JkIjoicGFzc1dvcmQxMjMqIiwiaWF0IjoxNjg2MzE2NjgyfQ.AComFsqNdr2ZhKTBBuNEocR7XUuU7WCnznYyerouO4A'
        }
    },
    {
        cases: {
            schema: "failed_with_invalid_token",
            name: "BS-26 Verifikasi gagal delete user dengan bearer token yang tidak valid",
            httpStatus: 401,
        },
        body: {
            userID: 'aae06367-6690-40f5-8ab6-1d6f69c56022',
            token: 'invalid'+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkphbmlzX0hhY2tldHQ3NCIsInBhc3N3b3JkIjoicGFzc1dvcmQxMjMqIiwiaWF0IjoxNjg2MzE2NjgyfQ.AComFsqNdr2ZhKTBBuNEocR7XUuU7WCnznYyerouO4A'
        }
    },
    {
        cases: {
            schema: "failed_with_invalid_userid",
            name: "BS-27 Verifikasi gagal delete user dengan userID yang tidak valid",
            httpStatus: 200,
        },
        body: {
            userID: 'invalid'+ 'aae06367-6690-40f5-8ab6-1d6f69c56022',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkphbmlzX0hhY2tldHQ3NCIsInBhc3N3b3JkIjoicGFzc1dvcmQxMjMqIiwiaWF0IjoxNjg2MzE2NjgyfQ.AComFsqNdr2ZhKTBBuNEocR7XUuU7WCnznYyerouO4A'
        }
    },
]
module.exports = { dataRegister, dataGtoken, dataAuth, dataGetUser, dataDeleteUser }