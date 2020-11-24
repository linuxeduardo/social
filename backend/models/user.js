const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 255 },
    email: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
      trim: true,
      unique: true
    },
    password: { type: String, required: true, minlength: 3, maxlength: 255 },
    birth: { type: Date, default: Date.now }
  })
);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(3).max(255).required().email(),
    password: Joi.string().min(3).max(255).required()
  });
  return schema.validate(user);
}

exports.validate = validateUser;
exports.User = User;
