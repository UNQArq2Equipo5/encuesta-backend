module.exports = function(req, res, next) {
    token = req.param('access_token');

    Alumno.findOne({'token': token}).exec(function (err, alumno) {
        if (err) { return res.serverError(err) }

        if (!alumno) {
            return res.forbidden('You are not permitted to perform this action.');
        }

        return next();
    });
};
