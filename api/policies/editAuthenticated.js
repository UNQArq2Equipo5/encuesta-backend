var passport = require('passport');

/**
 * Requiere autenticacion metodo != GET (POST, DELETE, etc)
 */
module.exports = function(req, res, next) {
    if (req.method != 'GET') {
        if (req.isAuthenticated()) {
            return next();
        }

        passport.authenticate('basic', {session: false}, function(err, user) {
            if (!user) return res.forbidden('You are not permitted to perform this action.');
            req.user = user;
            return next();
        })(req, res, next);
    } else {
        return next();
    }
};
