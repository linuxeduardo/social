const mongoose = require('mongoose');
const Joi = require('joi');

const Reply = mongoose.model(
  'Reply',
  new mongoose.Schema({
    content: { type: String, required: true, minlength: 3, maxlength: 255 },
    createdAt: { type: Date, default: Date.now, once: true },
    updatedAt: { type: Date, default: Date.now },
    message_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message'
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  })
);

function validateReply(reply) {
  const schema = Joi.object({
    content: Joi.string().min(3).max(255).required()
  });
  return schema.validate(reply);
}

exports.validate = validateReply;
exports.Reply = Reply;
