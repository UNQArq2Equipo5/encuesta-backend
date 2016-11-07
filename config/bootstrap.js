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

module.exports.bootstrap = function(cb) {

  Materia.create([
    {
      nombre: 'Introducción a la Programación',
      opciones: ['Comisión 1', 'Comisión 2', 'Comisión 3']
    },
    {
      nombre: 'Organización de Computadoras',
      opciones: ['Comisión 1', 'Comisión 2', 'Comisión 3']
    },
    {
      nombre: 'Matemática',
      opciones: ['Comisión 1', 'Comisión 2', 'Comisión 3']
    },
    {
      nombre: 'Programación con Objetos I',
      opciones: ['Comisión 1', 'Comisión 2', 'Comisión 3']
    },
    {
      nombre: 'Bases de Datos',
      opciones: ['Comisión 1', 'Comisión 2', 'Comisión 3']
    },
    {
      nombre: 'Estructuras de Datos',
      opciones: ['Comisión 1', 'Comisión 2', 'Comisión 3']
    },
    {
      nombre: 'Programación con Objetos II',
      opciones: ['Comisión 1', 'Comisión 2', 'Comisión 3']
    }
  ]).exec(function (err){
    if (err) { return done(err); }

    // ...etc...
    return cb();
  });

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  // cb();
};
