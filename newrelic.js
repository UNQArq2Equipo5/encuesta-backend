exports.config = {
  app_name: ['encuesta-arq2'],
  license_key: 'f8ae3c30a9e995f16ce779adb86f7793a7d39bd3',
  logging: {
    level: 'debug' // can be error, warn, info, debug or trace
  },
  rules: {
      ignore: ['^/socket.io/.*/xhr-polling']
  }
};
