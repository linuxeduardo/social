const express = require('express');
const router = express.Router();
const { Message, validate } = require('../models/message');

/* GET messages listing. */
router.get('/', async (req, res) => {
  const messages = await Message.find().populate('message_id');
  res.send(messages);
});

// POST message registration
router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let message = new Message({
    content: req.body.content
  });
  const result = await message.save();
  res.send(result);
});

// PUT
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
router.delete('/:id', async (req, res) => {
  const message = await Message.findByIdAndRemove(req.params.id);
  if (!message) return res.status(404).send('Mensagem não encontrada.');

  res.send(message);
});

module.exports = router;
