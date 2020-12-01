const mongoose = require('mongoose');
const config = require('config');
const logger = require('./winston');

module.exports = function () {
  mongoose
    .connect(config.get('mongoDBUri'), {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .then(() =>
      logger.log({
        level: 'info',
        message: 'Connected to DB...!'
      })
    );
};
