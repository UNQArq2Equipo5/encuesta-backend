var passport = require('passport');

module.exports = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    passport.authenticate('basic', {session: false}, function(err, user) {
        if (!user) return res.forbidden('You are not permitted to perform this action.');
        req.user = user;
        return next();
    })(req, res, next);
};
