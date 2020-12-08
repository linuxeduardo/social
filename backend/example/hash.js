const bc = require('bcrypt');

async function run() {
  const salt = await bc.genSalt(8);
  const hashed = await bc.hash('123', salt);
  console.log(salt);
  console.log(hashed);
}

run();
