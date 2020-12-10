const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const _ = require('lodash');
const bc = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');

// POST user validation
router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).send({ message: 'Email ou Senha Inválido.' });

  const validPassword = await bc.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send({ message: 'Email ou Senha Inválido.' });

  const token = user.generateAuthToken();
  // unexpected token JSON position
  res.status(200).json({ token });
});

router.post('/validate', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  if (!token) return res.status(401).send('Sem permissão de acesso2.');

  const decoded = jwt.verify(token, config.get('jwtPrivateKey'));

  if (decoded) return res.status(200).send(true);
  return res.status(400).send('Erro ao validar o Token.');
});

function validate(req) {
  const schema = Joi.object({
    email: Joi.string().min(3).max(255).required().email(),
    password: Joi.string().min(3).max(255).required()
  });
  return schema.validate(req);
}

module.exports = router;
