const db = require('./db');
const mail = require('./mail');

// testing numbers
module.exports.absolute = function (number) {
  return number >= 0 ? number : -number;
};

// testing strings
module.exports.greet = function (name) {
  return 'Welcome ' + name;
};

// testing arrays
module.exports.getCurrencies = function () {
  return ['USD', 'BRL', 'EUR'];
};

// testing objects
module.exports.getProducts = function (productId) {
  return { id: productId, price: 10, category: 'smart' };
};

// testing exceptions
module.exports.registerUser = function (username) {
  if (!username) throw new Error('Username is required.');
  return { id: new Date().getTime(), username: username };
};

// mock functions
module.exports.applyDiscount = function (order) {
  const customer = db.getCustomerSync(order.customerId);

  if (customer.points > 10) {
    order.totalPrice *= 0.9;
  }
};

// mock functions
module.exports.notifyCustomer = function (order) {
  const customer = db.getCustomerSync(order.customerId);
  mail.send(customer.email, 'Your order was placed successfully.');
};
