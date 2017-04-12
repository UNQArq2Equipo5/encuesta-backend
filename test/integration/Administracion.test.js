var request = require('supertest');
var assert = require('assert');

describe('Administración', function() {
  var materiaOfertada = {
    cuatrimestre: "58263c273ba6cfec1eb0ddf9",
    materia: "50c9b254b07e040200000004"
  };

  describe('Director', function() {
    it('Agregar una materia a la oferta', function (done) {
      request(sails.hooks.http.app)
        .post('/materiaOfertada')
        .auth('admin@unq.edu.ar', 'admin')
        .send(materiaOfertada)
        .expect(201)
        .expect(function(res) {
            assert.equal("58263c273ba6cfec1eb0ddf9", res.body.cuatrimestre);
            assert.equal("50c9b254b07e040200000004", res.body.materia);
        })
        .end(done);
    });

    it('Agregar un alumno', function (done) {
      request(sails.hooks.http.app)
        .post('/alumno')
        .auth('admin@unq.edu.ar', 'admin')
        .send({nombre: 'Pepe', apellido: 'Apellido', email: 'email@unq.edu.ar'})
        .expect(201)
        .expect(function(res) {
            assert.equal('Pepe', res.body.nombre);
            assert.equal('Apellido', res.body.apellido);
            assert.equal('email@unq.edu.ar', res.body.email);
        })
        .end(done);
    });

  });

  describe('Sin autenticación', function() {
    it('Deny agregar una materia a la oferta', function (done) {
      request(sails.hooks.http.app)
        .post('/materiaOfertada')
        .send(materiaOfertada)
        .expect(403)
        .end(done);
    });

    it('Deny agregar un alumno', function (done) {
      request(sails.hooks.http.app)
        .post('/alumno')
        .send({nombre: 'Pepe', apellido: 'Apellido', email: 'email@unq.edu.ar'})
        .expect(403)
        .end(done);
    });

  });
});
