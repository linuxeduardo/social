const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const Message = mongoose.model(
  'Message',
  new mongoose.Schema({
    content: { type: String, required: true, minlength: 3, maxlength: 255 },
    createdAt: { type: Date, default: Date.now, once: true },
    updatedAt: { type: Date, default: Date.now },
    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' }],
    userId: { type: String, required: true }
  })
);

function validateMessage(message) {
  const schema = Joi.object({
    content: Joi.string().min(3).max(255).required(),
    userId: Joi.objectId()
  });
  return schema.validate(message);
}

exports.validate = validateMessage;
exports.Message = Message;
