module.exports = function (req, res, next) {
  // 401 unauthorized - non valid jwt
  // 403 forbidden - valid without permission
  if (!req.user.isAdmin) return res.status(403).send('Acesso proibido.');
  next();
};
