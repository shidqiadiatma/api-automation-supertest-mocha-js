const request = require('supertest');
const expect = require('chai').expect;
const { faker } = require('@faker-js/faker');
const bookStore = require('../config/bookStore.config.json');
const randomName = "shidqiadiatma-" + faker.datatype.number(999999);

let username_value = '';
let userID_value = '';
let token = '';
let fullToken = 'Bearer '+ token;

describe('POST-Create User (/Account/v1/User)', () => {

    it('[BS-1] Verifikasi berhasil membuat user baru', (done) => {
        request(bookStore.baseUrl)
            .post('/Account/v1/User')
            .send(
                {
                    "userName": randomName,
                    "password": "passWord123*"
                })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Connection', 'keep-alive')
            .set('Accept-Encoding', 'gzip, deflate, br')
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(201);
                expect(res.body.userID).not.to.be.null;
                expect(res.body.username).to.be.equal(randomName);
                username_value = res.body.username;
                userID_value = res.body.userID;
                done();
            });
    });

    it('[BS-2] Verifikasi gagal membuat user baru dengan format password yang salah', (done) => {
        request(bookStore.baseUrl)
            .post('/Account/v1/User')
            .send(
                {
                    "userName": randomName,
                    "password": "passwordnih"
                })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Connection', 'keep-alive')
            .set('Accept-Encoding', 'gzip, deflate, br')
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(400);
                expect(res.body.code).to.be.equal("1300");
                expect(res.body.message).to.be.equal("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.");
                done();
            });
    });

    it('[BS-3] Verifikasi gagal membuat user baru dengan username yang sudah digunakan', (done) => {
        request(bookStore.baseUrl)
            .post('/Account/v1/User')
            .send(
                {
                    "userName": "shidqiadiatma01",
                    "password": "passWord123*"
                })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Connection', 'keep-alive')
            .set('Accept-Encoding', 'gzip, deflate, br')
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(406);
                expect(res.body.code).to.be.equal("1204");
                expect(res.body.message).to.be.equal("User exists!");
                done();
            });
    });
});

describe('POST-Generate Token (/Account/v1/GenerateToken)', () => {
    
    it('[BS-4] Verifikasi berhasil generate token pada user baru', (done) => {
        request(bookStore.baseUrl)
            .post('/Account/v1/GenerateToken')
            .send(
                {
                    "userName": username_value,
                    "password": "passWord123*"
                })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Connection', 'keep-alive')
            .set('Accept-Encoding', 'gzip, deflate, br')
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(200);
                expect(res.body.token).not.to.be.null;
                expect(res.body.expires).not.to.be.null;
                expect(res.body.status).to.be.equal("Success");
                expect(res.body.result).to.be.equal("User authorized successfully.");
                token = res.body.token;
                done();
            });
    });

    it('[BS-5] Verifikasi gagal generate token pada username yang tidak valid', (done) => {
        request(bookStore.baseUrl)
            .post('/Account/v1/GenerateToken')
            .send(
                {
                    "userName": 'usernameNgasal',
                    "password": "passWord123*"
                })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Connection', 'keep-alive')
            .set('Accept-Encoding', 'gzip, deflate, br')
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(200);
                expect(res.body.token).to.be.null;
                expect(res.body.expires).to.be.null;
                expect(res.body.status).to.be.equal("Failed");
                expect(res.body.result).to.be.equal("User authorization failed.");
                done();
            });
    });

    it('[BS-6] Verifikasi gagal generate token menggunakan password yang tidak valid/salah', (done) => {
        request(bookStore.baseUrl)
            .post('/Account/v1/GenerateToken')
            .send(
                {
                    "userName": username_value,
                    "password": 'salahpassword'
                })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Connection', 'keep-alive')
            .set('Accept-Encoding', 'gzip, deflate, br')
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(200);
                expect(res.body.token).to.be.null;
                expect(res.body.expires).to.be.null;
                expect(res.body.status).to.be.equal("Failed");
                expect(res.body.result).to.be.equal("User authorization failed.");
                done();
            });
    });
   
});

describe('POST-Authorized/Login (/Account/v1/User/{{userID}})', () => {
    
    it('[BS-7] Verifikasi berhasil generate token pada user baru', (done) => {
        request(bookStore.baseUrl)
            .post('/Account/v1/Authorized')
            .send(
                {
                    "userName": username_value,
                    "password": "passWord123*"
                })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Connection', 'keep-alive')
            .set('Accept-Encoding', 'gzip, deflate, br')
            .set('Authorization', fullToken)
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(200);
                expect(res.body).true;
                done();
            });
    });

    it('[BS-8] Verifikasi gagal authorized/login menggunakan credential yang tidak valid (username/password salah)', (done) => {
        request(bookStore.baseUrl)
            .post('/Account/v1/Authorized')
            .send(
                {
                    "userName": 'invalidName',
                    "password": "invalidpassword"
                })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Connection', 'keep-alive')
            .set('Accept-Encoding', 'gzip, deflate, br')
            .set('Authorization', fullToken)
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(404);
                expect(res.body.code).to.be.equal("1207");
                expect(res.body.message).to.be.equal("User not found!");
                done();
            });
    });

    it('[BS-9] Verifikasi gagal authorized/login menggunakan empty string (tidak mengisi semua field)', (done) => {
        request(bookStore.baseUrl)
            .post('/Account/v1/Authorized')
            .send(
                {
                    "userName": '',
                    "password": ''
                })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Connection', 'keep-alive')
            .set('Accept-Encoding', 'gzip, deflate, br')
            .set('Authorization', fullToken)
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(400);
                expect(res.body.code).to.be.equal("1200");
                expect(res.body.message).to.be.equal("UserName and Password required.");
                done();
            });
    });
});

describe('GET-Get User (/Account/v1/User/{{userID}})', () => {
    
    it('[BS-10] Verifikasi berhasil get user dengan userID yang valid', (done) => {
        request(bookStore.baseUrl)
            .get('/Account/v1/User/'+userID_value)
            .set('Accept', 'application/json')
            .set('Connection', 'keep-alive')
            .set('Accept-Encoding', 'gzip, deflate, br')
            .set('Authorization', 'Bearer '+token)
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(200)
                expect(res.body.userID).not.to.be.null;
                expect(res.body.username).not.to.be.null;
                done();
            });
    });

    it('[BS-11] Verifikasi gagal get user dengan bearer token yang tidak valid', (done) => {
        request(bookStore.baseUrl)
            .get('/Account/v1/User/'+userID_value)
            .set('Accept', 'application/json')
            .set('Connection', 'keep-alive')
            .set('Accept-Encoding', 'gzip, deflate, br')
            .set('Authorization', 'Invalid '+token)
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(401)
                expect(res.body.code).to.be.equal("1200")
                expect(res.body.message).to.be.equal("User not authorized!")
                done();
            });
    });

    it('[BS-12] Verifikasi gagal get user dengan userID yang tidak valid', (done) => {
        request(bookStore.baseUrl)
        .get('/Account/v1/User/965256f5-9247-4776-94dd-e8fa68ff1362s')
        .set('Accept', 'application/json')
        .set('Connection', 'keep-alive')
        .set('Accept-Encoding', 'gzip, deflate, br')
        .set('Authorization', 'Bearer '+token)
        .end(function (err, res) {
            expect(res.statusCode).to.be.equal(401)
            expect(res.body.code).to.be.equal("1207")
            expect(res.body.message).to.be.equal("User not found!")
            done();
        });
    });
});

describe('DELETE-Delete User (/Account/v1/User/{{userID}})', () => {
    
    it('[BS-25] Verifikasi berhasil delete user dengan userID yang valid', (done) => {
        request(bookStore.baseUrl)
            .delete('/Account/v1/User/'+userID_value)
            .set('Accept', 'application/json')
            .set('Connection', 'keep-alive')
            .set('Accept-Encoding', 'gzip, deflate, br')
            .set('Authorization', 'Bearer '+token)
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(204)
                done();
            });
    });

    it('[BS-26] Verifikasi gagal delete user dengan bearer token yang tidak valid', (done) => {
        request(bookStore.baseUrl)
            .delete('/Account/v1/User/'+userID_value)
            .set('Accept', 'application/json')
            .set('Connection', 'keep-alive')
            .set('Accept-Encoding', 'gzip, deflate, br')
            .set('Authorization', 'Invalid '+token)
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(401)
                expect(res.body.code).to.be.equal("1200")
                expect(res.body.message).to.be.equal("User not authorized!")
                done();
            });
    });

    it('[BS-27] Verifikasi gagal delete user dengan userID yang tidak valid', (done) => {
        request(bookStore.baseUrl)
        .delete('/Account/v1/User/965256f5-9247-4776-94dd-e8fa68ff1362s')
        .set('Accept', 'application/json')
        .set('Connection', 'keep-alive')
        .set('Accept-Encoding', 'gzip, deflate, br')
        .set('Authorization', 'Bearer '+token)
        .end(function (err, res) {
            expect(res.statusCode).to.be.equal(200)
            expect(res.body.code).to.be.equal("1207")
            expect(res.body.message).to.be.equal("User Id not correct!")
            done();
        });
    });
});