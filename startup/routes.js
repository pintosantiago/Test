const express = require('express');
const users = require('../routes/users');
const rootFile = require('../routes/root');
const auth = require('../routes/auth');
const swaggerUi = require('swagger-ui-express');
const read = require('read-yaml');
const swaggerDocument = read.sync('./swagger.yaml');

module.exports = function(app) {
  //Agrega handlers a la app segun el endpoint del request
  //Aca se esta loopeando todo el tiempo porque en index.js se hace un llamado
  //en la linea que dice "require('./startup/routes')(app);"
  app.use(express.json());
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use('/', rootFile);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
};
