module.exports = function (err, req, res, next) {
  // log the exception
  // depois de todos middleware
  res.status(500).send('Something failed.');
};
