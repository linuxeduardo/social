const mongoose = require('mongoose');
const Joi = require('joi');

const Message = mongoose.model(
  'Message',
  new mongoose.Schema({
    content: { type: String, required: true, minlength: 3, maxlength: 255 },
    createdAt: { type: Date, default: Date.now, once: true },
    updatedAt: { type: Date, default: Date.now },
    replies_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reply'
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  })
);

function validateMessage(message) {
  const schema = Joi.object({
    content: Joi.string().min(3).max(255).required()
  });
  return schema.validate(message);
}

exports.validate = validateMessage;
exports.Message = Message;
