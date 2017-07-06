/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var sha512 = require('js-sha512');

module.exports = {

    attributes: {
        email: {
              type: 'email',
              required: true,
              unique: true
        },
        password: {
            type: 'string',
            minLength: 5,
            required: true
        },
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },

    beforeCreate: function(user, cb) {
        hash = sha512(user.password);
        user.password = hash;
        cb();
    }
};
