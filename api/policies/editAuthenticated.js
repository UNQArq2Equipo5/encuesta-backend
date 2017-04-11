/**
 * Requiere autenticacion metodo != GET (POST, DELETE, etc)
 */
module.exports = function(req, res, next) {
    if (req.method != 'GET' && !req.isAuthenticated()) {
        return res.forbidden('You are not permitted to perform this action.');
    }

    return next();
};
