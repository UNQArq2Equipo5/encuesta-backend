/**
 * Comision.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    profesor: {
      type: 'string'
    },
    dia: {
      type: 'integer',
      min: 1,
      max: 7,
      required: true
    },
    horarioInicio: {
      type: 'string',
      required: true
    },
    horarioFin: {
      type: 'string',
      required: true
    },
    materiaOfertada: {
      model: 'materiaOfertada',
      required: true
    }
  }
};
