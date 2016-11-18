/**
 * AlumnoController
 *
 * @description :: Server-side logic for managing alumnoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	recuperarEncuestas: function (req, res) {
		var email = req.param('email');
    var alumno = [];
		var encuestas = [];
		sails.log("Se recuperan encuestas para un alumno con email: " + email);
    // Buscar todos los alumnos que no tienen una encuesta en el cuatrimestre seleccionado
    Alumno.findOne({'email': email}).exec(function (err, alumno){
			if (err) { return res.serverError(err) }

			if (!alumno) {
				sails.log('No se encontraron registros con ' + email );
				return res.notFound('No se encontro ningun alumno con el email ' + email);
			}

			sails.log(alumno);
			Encuesta.find({'alumno': alumno.id}).exec(function (err, encuestas){
				encuestas.forEach(function(encuesta){
					EmailService.enviarToken(alumno, encuesta);
				});
			});
			
			return res.json('Se envio por correo electronico el token de acceso');

  	});
	}
}
