var Mailgun = require('machinepack-mailgun');

module.exports = {
  enviarToken: function(alumno, encuesta){
    sails.log('Comenzando envio de token:' + encuesta.token + ' al correo: ' + alumno.email);
    Mailgun.sendHtmlEmail({
      apiKey: 'key-d4d66f3e82cf6868649c89e850e80a9b',
      domain: 'sandbox520368e6b59f487c8dc87eebcf5a39b6.mailgun.org',
      toEmail: alumno.email,
      toName: alumno.apellido + ', ' + alumno.nombre,
      subject: 'Acceso a la encuesta',
      textMessage: alumno.nombre+',\n Te enviamos la URL para que puedas completar la encuesta: http://encuesta-frontend.herokuapp.com/#/encuesta/'+encuesta.token,
      htmlMessage: alumno.nombre+',\n Te enviamos la URL para que puedas completar la: http://encuesta-frontend.herokuapp.com/#/encuesta/'+encuesta.token,
      fromEmail: 'postmaster@sandbox520368e6b59f487c8dc87eebcf5a39b6.mailgun.org',
      fromName: 'Mailgun Sandbox',
    }).exec(function (err) {
      // If an unexpected error occurred...
      if (err) { sails.log(err); }
      sails.log('Correo enviado a ' + alumno.email);
    });
  }
}
