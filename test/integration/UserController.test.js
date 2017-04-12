var request = require('supertest');
var assert = require('assert');

describe('UserController', function() {

  describe('/user', function() {
    it('should deny access', function (done) {
      request(sails.hooks.http.app)
        .get('/user')
        .expect(403, done);
    });

    it('should return all users with basic auth', function (done) {
      request(sails.hooks.http.app)
        .get('/user')
        .auth('admin@unq.edu.ar', 'admin')
        .expect(200)
        .expect(function(res) {
            assert('admin@unq.edu.ar', res.body[0].email);
        })
        .end(done);
    });
  });

});
