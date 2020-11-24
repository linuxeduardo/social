const express = require('express');
const router = express.Router();
const { Reply, validate } = require('../models/reply');
const { Message } = require('../models/message');

/* GET reply listing. */
router.get('/', async (req, res) => {
  const reply = await Reply.find();
  res.send(reply);
});

// POST reply
router.post('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].reply);

  let reply = new Reply({
    content: req.body.content
  });

  let savedReply = await reply.save();
  let message = await Message.findById(req.params.id);

  message.replies.push(savedReply._id);
  res.send(message);
});

// PUT
router.put('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].reply);

  let reply = await Reply.findById(req.params.id);
  if (!reply) return res.status(404).send('Resposta não encontrada.');

  reply.content = req.body.content;
  reply.updatedAt = Date.now();

  const result = await reply.save();
  res.send(result);
});

// DELETE
router.delete('/:id', async (req, res) => {
  const reply = await Reply.findByIdAndRemove(req.params.id);
  if (!reply) return res.status(404).send('Resposta não encontrada.');

  res.send(reply);
});

module.exports = router;
