const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = new mongoose.Schema({
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
  birth: { type: Date },
  isAdmin: { type: Boolean, default: false }
});

userSchema.methods.generateAuthToken = function () {
  // const token = jwt.sign({ _id: user._id }, process.env.SECRET);
  return jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    config.get('jwtPrivateKey'),
    {
      expiresIn: '15m'
    }
  );
};

const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(3).max(255).required().email(),
    password: Joi.string().min(3).max(255).required()
  });
  return schema.validate(user);
}

exports.validate = validateUser;
exports.User = User;
