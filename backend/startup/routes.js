const express = require('express');
const error = require('../middleware/error');

const indexRouter = require('../routes/index');
const usersRouter = require('../routes/users');
const messagesRouter = require('../routes/message');
const replyRouter = require('../routes/reply');
const auth = require('../routes/auth');

module.exports = function (app) {
  app.use(express.json());
  app.use('/', indexRouter);
  app.use('/api/users', usersRouter);
  app.use('/api/messages', messagesRouter);
  app.use('/api/reply', replyRouter);
  app.use('/api/auth', auth);
  app.use(error);
};
