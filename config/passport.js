var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    BasicStrategy = require('passport-http').BasicStrategy,
    sha512 = require('js-sha512');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findOne({ id: id } , function (err, user) {
        done(err, user);
    });
});

authenticateUser = function(email, password, done) {
    User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false, { message: 'Incorrect email.' }); }

        if (sha512(password) == user.password) {
            var returnUser = {
                email: user.email,
                createdAt: user.createdAt,
                id: user.id
            };

            return done(null, returnUser, { message: 'Logged In Successfully' });
        }

        return done(null, false, { message: 'Invalid Password'});
    });
};

passport.use(new LocalStrategy({usernameField: 'email', passwordField: 'password'}, authenticateUser));
passport.use(new BasicStrategy(authenticateUser));
