/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
materias = require('./data/materias.js');
alumnos = require('./data/alumnos.js');
cuatrimestres = require('./data/cuatrimestres.js');
encuestas = require('./data/encuestas.js');

module.exports.bootstrap = function(cb) {

  Materia.create(materias.data).exec(function (err){
    if (err) { console.log(err) }
  });
  Alumno.create(alumnos.data).exec(function (err){
    if (err) { console.log(err) }
  });

  Cuatrimestre.create(cuatrimestres.data).exec(function (err){
    if (err) { console.log(err) }
  });

  Encuesta.create(encuestas.data).exec(function (err){
    if (err) { console.log(err) }
  });

  return cb();
};
