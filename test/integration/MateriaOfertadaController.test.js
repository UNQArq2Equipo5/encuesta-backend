var request = require('supertest');
var assert = require('assert');

describe('MateriaOfertadaController', function() {

  describe('/materiaOfertada', function() {
    it('should be public', function (done) {
      request(sails.hooks.http.app)
        .get('/materiaOfertada')
        .expect(200)
        .expect(function(res) {
            var oferta = res.body[0];
            assert.equal("Introducción a la Programación", oferta.materia.nombre);
            assert.equal("Comisión 1", oferta.comisiones[0].descripcion);
        })
        .end(done);
    });
  });

});
