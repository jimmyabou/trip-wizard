const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const loginUser = require('../db/queries/loginUser.js');

router.post('/', (req, res) => {
  const { email, password } = req.body;
  console.log('reached server rout',email)
  loginUser.loginUser(email)
    .then(result => {
      console.log(result.rows[0]);
      if (result.rows.length === 0) {
        return res.json( 'user does not exist');
      }
      const user = result.rows[0];
      return bcrypt.compare(password, user.password)
        .then(passwordMatch => {
          if (!passwordMatch) {
            return res.json('Invalid username or password');
          }
          res.cookie('user', user.email);
          res.json({ message: 'Login successful', email: user.email });
        });
    })
    .catch(error => {
      console.error(error);
    });
});


module.exports = router;
