/**
 * Cuatrimestre.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    year: {
      type: 'integer',
      max: 2099,
      min: 2000,
      required: true
    },
    period: {
      type: 'integer',
      max: 12,
      min: 1,
      required: true
    },
    ofertaAcademica: {
      collection: 'materiaOfertada',
      via: 'cuatrimestre',
    }
  }
};
