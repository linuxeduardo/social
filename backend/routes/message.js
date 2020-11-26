const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Message, validate } = require('../models/message');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

/* GET messages */
router.get('/', async (req, res) => {
  const messages = await Message.find();
  res.send(messages);
});

/* GET by ID */
router.get('/:id', async (req, res) => {
  const message = await await Message.findOne({ _id: req.params.id });
  if (!message) return res.status(404).send('Mensagem não encontrada.');

  res.send(message);
});

// POST message
router.post('/', auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  if (!mongoose.Types.ObjectId.isValid(req.body.userId))
    return res.status(400).send('ID Inválido.');

  const message = new Message({
    content: req.body.content,
    userId: req.body.userId
  });

  const result = await message.save();
  res.send(result);
});

// PUT message
router.put('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let message = await Message.findById(req.params.id);
  if (!message) return res.status(404).send('Mensagem não encontrada.');

  message.content = req.body.content;
  message.updatedAt = Date.now();

  const result = await message.save();
  res.send(result);
});

// DELETE
router.delete('/:id', [auth, admin], async (req, res) => {
  const message = await Message.findByIdAndRemove(req.params.id);
  if (!message) return res.status(404).send('Mensagem não encontrada.');

  res.send(message);
});

module.exports = router;
