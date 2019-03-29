const express = require('express');
const app = express();


require('./startup/routes')(app); //Setea endpoints
require('./startup/db')(); //Conecta con la base de datos

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports = server;
