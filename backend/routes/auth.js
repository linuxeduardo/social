const express = require('express');
const router = express.Router();
const _ = require('lodash');
const bc = require('bcrypt');
const Joi = require('joi');
const { User } = require('../models/user');

// POST user validation
router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email ou Senha Inválido.');

  const validPassword = await bc.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Email ou Senha Inválido.');

  const token = user.generateAuthToken();

  res.send(token);
});

function validate(req) {
  const schema = Joi.object({
    email: Joi.string().min(3).max(255).required().email(),
    password: Joi.string().min(3).max(255).required()
  });
  return schema.validate(req);
}

module.exports = router;
