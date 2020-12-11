const { Message } = require('../models/message');

module.exports = async function (req, res, next) {
  const message = await Message.findOne({ _id: req.params.id });
  const userId = req.user._id;
  const userMessageId = message.name;
  if (userId.toString() === userMessageId.toString()) {
    next();
  } else {
    return res.status(401).send('Sem permissão para deletar.');
  }
};
