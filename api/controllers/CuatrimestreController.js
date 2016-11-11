/**
 * CuatrimestreController
 *
 * @description :: Server-side logic for managing cuatrimestres
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	createEncuestas: function (req, res) {
		var cuatrimestre = req.param('cuatrimestre');
    var alumnos = [];
    var encuestas = [];
		sails.log("Se genera una encuesta");
    // Buscar todos los alumnos que no tienen una encuesta en el cuatrimestre seleccionado
    Alumno.find().exec(function (err, alumnos){
      alumnos.forEach( function(alumno) {
				encuestas.push({'alumno': alumno.id, 'cuatrimestre': cuatrimestre});
      });
			Encuesta.create(encuestas).exec(function (err, reg) {
				sails.log(reg);
				return res.json(reg);
			});
    });

  }
};
