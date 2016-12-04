/**
 * MateriaOfertada.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cuatrimestre: {
      model: 'cuatrimestre',
      required: true
    },
    materia: {
      model: 'materia',
      required: true
    },
    comisiones: {
      collection: 'comision',
      via: 'materiaOfertada',
    },
    respuestas: {
      collection: 'respuesta',
      via: 'materiaOfertada'
    }
  }
};
