var request = require('supertest');
var assert = require('assert');

describe('EncuestaController', function() {
  describe('Como director (auth http)', function() {
    it('/encuesta Obtiene todas las encuestas', function (done) {
      request(sails.hooks.http.app)
        .get('/encuesta')
        .auth('admin@unq.edu.ar', 'admin')
        .expect(200)
        .expect(function(res) {
            assert.equal(2, res.body.length);
        })
        .end(done);
    });
  });

  describe('Como alumno (access_token)', function() {
    var access_token = "c9099d9e-4b61-4b74-af49-cb075a874425";
    var encuesta = "58263c4fb5fea9111fb47c2e";
    it('/encuesta Deny access', function (done) {
      request(sails.hooks.http.app)
        .get('/encuesta')
        .set('access_token', access_token)
        .expect(403, done);
    });

    it('Puede obtener su encuesta', function (done) {
      request(sails.hooks.http.app)
        .get('/encuesta/'+encuesta)
        .set('access_token', access_token)
        .expect(200)
        .expect(function(res) {
            assert.equal(encuesta, res.body.id);
        })
        .end(done);
    });

    it('No puede obtener otra encuesta', function (done) {
      request(sails.hooks.http.app)
        .get('/encuesta/58263c4fb5fea9111fb47c2f')
        .set('access_token', access_token)
        .expect(403)
        .end(done);
    });

    it('No puede modificar encuesta sin access_token', function (done) {
        Comision.find({limit: 1}).exec(function (err, comisiones) {
            var comision = comisiones[0].id;
            request(sails.hooks.http.app)
                .post('/encuesta/'+encuesta+'/respuestas')
                .send({id: comision})
                .expect(403)
                .end(done);
        });
    });


    it('Puede modificar su encuesta', function (done) {
        Comision.find({limit: 1}).exec(function (err, comisiones) {
            var comision = comisiones[0].id;
            request(sails.hooks.http.app)
                .post('/encuesta/'+encuesta+'/respuestas')
                .send({id: comision})
                .set('access_token', access_token)
                .expect(200)
                .expect(function(res) {
                    assert.equal(encuesta, res.body.id);
                    assert.equal(1, res.body.respuestas.length);
                    assert.equal(comision, res.body.respuestas[0].id);
                })
                .end(done);
        });
    });

    it('No puede modificar otra encuesta', function (done) {
        Comision.find({limit: 1}).exec(function (err, comisiones) {
            var comision = comisiones[0].id;
            request(sails.hooks.http.app)
                .post('/encuesta/58263c4fb5fea9111fb47c2f')
                .send({respuestas: [{id: comision}]})
                .set('access_token', access_token)
                .expect(403)
                .end(done);
        });
    });
  });
});
