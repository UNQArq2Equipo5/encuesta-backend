module.exports.newrelic = {
  app_name: ['encuesta-arq2'],
  license_key: '098569dcab84ccb73cfb478c2f30932094d2c90c',
  logging: {
    level: 'debug', // can be error, warn, info, debug or trace
  },
  rules: {
      ignore: ['^/socket.io/.*/xhr-polling']
  }
};
