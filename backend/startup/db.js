const mongoose = require('mongoose');
const config = require('config');
const logger = require('./winston');
const db = config.get('dbURI');

// NODE_ENV=test

module.exports = function () {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .then(() =>
      logger.log({
        level: 'info',
        message: `Connected to ${db} : ${new Date().toLocaleString('pt-BR')} `
      })
    );
};
