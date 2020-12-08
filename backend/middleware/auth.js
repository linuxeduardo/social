const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  let token;
  let xAuthToken;

  if (req.header('x-auth-token')) {
    xAuthToken = req.header('x-auth-token').split(' ')[1];
  }

  if (req.headers.authorization) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) return res.status(401).send('Sem permissão de acesso.');

  try {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Token Inválido.');
  }
};
