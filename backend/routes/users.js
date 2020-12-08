const bc = require('bcrypt');
const express = require('express');
const router = express.Router();
const { User, validate } = require('../models/user');
const _ = require('lodash');
const auth = require('../middleware/auth');
const validateObjectId = require('../middleware/validateObjectId');

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// getting current user
router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password -__v');
  res.send(user);
});

// POST user registration
router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('Usuário já registrado.');

  user = new User(_.pick(req.body, ['name', 'email', 'password']));

  const salt = await bc.genSalt(parseInt(process.env.SALT, 10));
  user.password = await bc.hash(user.password, salt);
  await user.save();

  const token = user.generateAuthToken();

  res
    .header('x-auth-token', token)
    .send(_.pick(user, ['_id', 'name', 'email']));
});

// PUT
router.put('/:id', auth, validateObjectId, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findById(req.params.id);
  if (!user) return res.status(404).send('Usuário não encontrado.');

  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  user.birth = req.body.birth;

  const result = await user.save();
  res.send(result);
});

// DELETE
router.delete('/:id', auth, async (req, res) => {
  // TODO: verificar se o user a ser deletado é o mesmo do token
  const user = await User.findByIdAndRemove(req.params.id);
  if (!user) return res.status(404).send('Usuário não encontrado.');

  res.send(user);
});

module.exports = router;
