/**
 * Respuesta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    materiaOfertada: {
      model: 'materiaofertada',
      required: true
    },
    valor: {
      type: 'string',
      required: true
    },
    comision: {
      model: 'comision'
    },
    encuesta: {
      model: 'encuesta',
      required: true
    }
  }
};
