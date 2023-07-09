const db = require('../../configs/db.config');

const loginUser = (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const values = [email];
console.log('before query')
  return db.query(query, values)
    .then(result => result)
    .catch(error => {
      console.error(error);
    });
};

module.exports = {loginUser};
