const express = require('express');
const router = express.Router();
const { User, validate } = require('../models/user');

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// POST user registration
router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    birth: req.body.birth
  });
  await user.save();
  res.send(user);
});

// PUT
router.put('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);
  if (!user) return res.status(404).send('Usuário não encontrado.');

  res.send(user);
});

module.exports = router;
