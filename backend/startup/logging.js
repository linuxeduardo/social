require('winston-mongodb');
require('express-async-errors');
const logger = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

module.exports = function () {
  const winstonLogger = createLogger({
    defaultMeta: { service: 'user-service' },
    transports: [
      new logger.transports.File({ filename: 'log/error.log', level: 'error' }),
      new logger.transports.File({ filename: 'log/combined.log' })
    ],
    exceptionHandlers: [
      new transports.File({ filename: 'log/exceptions.log' })
    ],
    format: combine(label({ label: 'messa::backend' }), timestamp(), myFormat)
  });

  // Call exceptions.handle with a transport to handle exceptions
  winstonLogger.exceptions.handle(
    new transports.File({ filename: 'log/exceptions.log' })
  );

  process.on('unhandledRejection', ex => {
    throw ex;
  });
};
