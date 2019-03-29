const mongoose = require('mongoose');
const dbLog = require('debug')('app:dbLog');
const config = require('config');

module.exports = function() {
  //const db = config.get('db');
  const db = "mongodb+srv://admin:admin@hypechattestdb-gv9fz.mongodb.net/hypechattestdb?retryWrites=true";
  mongoose.set('bufferCommands', false);
  mongoose.connect(db, {useNewUrlParser: true})
      .then(() => dbLog(`Connected to ${db}`))
      .catch((ex) => dbLog(`An error occured while connecting to ${db}.`, ex));
};
