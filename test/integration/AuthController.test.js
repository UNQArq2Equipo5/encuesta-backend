var request = require('supertest');
var assert = require('assert');

describe('AuthController', function() {

  describe('#login()', function() {
    it('should authenticate valid user', function (done) {
      request(sails.hooks.http.app)
        .post('/auth/login')
        .send({ email: 'admin@unq.edu.ar', password: 'admin' })
        .expect(200)
        .expect(function(res) {
            assert("Logged In Successfully", res.body.message);
            assert("admin@unq.edu.ar", res.body.user.email);
        })
        .end(done);
    });

    it('should not authenticate invalid email', function (done) {
      request(sails.hooks.http.app)
        .post('/auth/login')
        .send({ email: 'notfound@unq.edu.ar', password: 'admin' })
        .expect(200, {message: "Incorrect email.", user: false}, done)
    });

    it('should not authenticate wrong password', function (done) {
      request(sails.hooks.http.app)
        .post('/auth/login')
        .send({ email: 'admin@unq.edu.ar', password: '1234' })
        .expect(200, {message: "Invalid Password", user: false}, done)
    });
  });

});
