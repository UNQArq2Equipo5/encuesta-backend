/**
 * Alumno.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var uuid = require('node-uuid');

module.exports = {

  attributes: {
    token: {
      type: 'uuid',
      defaultsTo: function (){ return uuid.v4(); },
    },
    nombre: {
      type: 'string',
      required: true
    },
    apellido: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    encuestas: {
      collection: 'encuesta',
      via: 'alumno'
    }
  }
};
