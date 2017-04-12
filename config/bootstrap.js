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

    sails.newrelic = require('newrelic');

    Materia.create(materias.data).exec(function (err){
        Alumno.create(alumnos.data).exec(function (err){
            User.create({email:'admin@unq.edu.ar', password:'admin'}).exec(function (err){
                Cuatrimestre.create(cuatrimestres.data).exec(function (err){
                    Encuesta.create(encuestas.data).exec(function (err){
                        materias.data.forEach(function(m) {
                          MateriaOfertada.create({cuatrimestre: '58263c273ba6cfec1eb0ddf9', materia: m.id}).exec(function (err, mo){
                            if (err) { return res.serverError(err); }
                            mo.comisiones.add({descripcion: 'Comisión 1', profesor: 'Profe Juan', cupoMinimo: 10, cupoMaximo: 30, dia: 1, horarioInicio: '10', horarioFin: '14'});
                            mo.comisiones.add({descripcion: 'Comisión 2', profesor: 'Profe Juan2', cupoMinimo: 10, cupoMaximo: 30, dia: 2, horarioInicio: '10', horarioFin: '14'});
                            mo.comisiones.add({descripcion: 'Comisión 3', profesor: 'Profe Juan3', cupoMinimo: 2, cupoMaximo: 5, dia: 3, horarioInicio: '10', horarioFin: '14'});
                            mo.save(function(err) { if(err) return;});
                          });
                        });
                        return cb();
                    });
                });
            });
        });
    });
};
