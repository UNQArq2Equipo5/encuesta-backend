/**
 * Built-in Log Configuration
 * (sails.config.log)
 *
 * Configure the log level for your app, as well as the transport
 * (Underneath the covers, Sails uses Winston for logging, which
 * allows for some pretty neat custom transports/adapters for log messages)
 *
 * For more information on the Sails logger, check out:
 * http://sailsjs.org/#!/documentation/concepts/Logging
 */

var Winston = require('winston');
var Loggly = require('winston-loggly');

module.exports.log = {

  /***************************************************************************
  *                                                                          *
  * Valid `level` configs: i.e. the minimum log level to capture with        *
  * sails.log.*()                                                            *
  *                                                                          *
  * The order of precedence for log levels from lowest to highest is:        *
  * silly, verbose, info, debug, warn, error                                 *
  *                                                                          *
  * You may also set the level to "silent" to suppress all logs.             *
  *                                                                          *
  ***************************************************************************/

  // level: 'info',

  custom: new Winston.Logger({
    transports: [

      new Winston.transports.Loggly({
        level: 'info',
        subdomain: 'encuestaarq2',
        inputToken: '411a03b7-00a3-44b8-b312-cb68465d2e7c'
      }),

      new Winston.transports.Console({
        level: 'verbose'
      })

    ]
  })

};
