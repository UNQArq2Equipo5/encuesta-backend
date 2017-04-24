module.exports = function(req, res, next) {
    var token = req.headers.access_token;
    var model = req.options.model;
    var id = req.options.id || (req.options.where && req.options.where.id) || req.param('parentid') || req.param('id');

    Alumno.findOne({'token': token}).exec(function (err, alumno) {
        if (err) { return res.serverError(err) }
        if (!alumno) {
            return res.forbidden('You are not permitted to perform this action.');
        }

        req._sails.models[model].findOne(id).exec(function(err, encuesta) {
            if (err) { return res.serverError(err) }

            if(encuesta && (encuesta.alumno == alumno.id)) {
                return next();
            }

            return res.forbidden('You are not permitted to perform this action.');
        });
    });
};
