module.exports.newrelic = {
  app_name: ['encuesta-backend'],
  license_key: '1d6c0f4135bbbf38a3affa34b5e14b9b91802c47',
  logging: {
    level: 'info', // can be error, warn, info, debug or trace
  },
  rules: {
      ignore: ['^/socket.io/.*/xhr-polling']
  }
};
