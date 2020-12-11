const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Message, validate } = require('../models/message');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const validateObjectId = require('../middleware/validateObjectId');
const owner = require('../middleware/owner');

/* GET messages */
router.get('/', async (req, res) => {
  const messages = await Message.find()
    .populate('name', 'name')
    .sort([['createdAt', -1]]);
  res.send(messages);
});

/* GET by ID */
router.get('/:id', validateObjectId, async (req, res) => {
  const message = await Message.findOne({ _id: req.params.id });
  if (!message) return res.status(404).send('Mensagem não encontrada.');
  res.send(message);
});

// POST message
router.post('/', auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const message = new Message({
    content: req.body.content,
    name: req.user._id
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
router.delete('/:id', [auth, owner], async (req, res) => {
  const message = await Message.findByIdAndRemove(req.params.id);
  if (!message) return res.status(404).send('Mensagem não encontrada.');

  res.send(message);
});
// [auth, admin],
module.exports = router;
