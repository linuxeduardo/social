const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

const mongoose = require('mongoose');

// mongoose connect
mongoose
  .connect('mongodb://localhost/mess', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB... ' + err));

// schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 255 },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    lowercase: true,
    trim: true
  },
  password: { type: String, required: true, minlength: 8, maxlength: 255 },
  birth: { type: Date, default: Date.now }
});

// models
const User = mongoose.model('User', userSchema);

async function createUser() {
  const user = new User({
    name: 'Mia',
    email: 'Email',
    password: '123'
  });

  try {
    const result = await user.save();
    console.log(result);
  } catch (ex) {
    for (field in ex.errors) console.log(ex.errors[field].message);
  }
}
// createUser();

// query user
async function getUsers() {
  const pageNumber = 2;
  const pageSize = 10;

  const users = await User.find()
    // .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ email: 1 })
    .select({ name: 1, email: 1 });
  // .countDocuments();
  console.log(users);
}
getUsers();

// update user
async function updateUser(id) {
  if (!id) return res.status(404).send('Not Found.');
  const user = await User.findById(id);
  if (!user) return;
  user.set({
    name: 'New name',
    email: 'New email'
  });

  const result = await user.save();
  console.log(result);
}
// updateUser('5fbc21cc533d4c273c31ca0a');

// remove user
async function removeUser(id) {
  if (!id) return res.status(404).send('Not Found.');
  const result = await User.deleteOne({ _id: id });
  // console.log(result);
}
// removeUser('5fbc24bec5da080e2012d1c5');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
