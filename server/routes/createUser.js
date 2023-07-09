const express = require('express');
const router = express.Router();
const createUser = require('../db/queries/createUser.js');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const { username, password, email, address, phone_number } = req.body;
  console.log("recieved request from axios")
  const encrytpassword= await bcrypt.hash(password, 10);
  createUser.createUser(username, encrytpassword, email, address, phone_number)
  .then(response => {
    res.json(response);
  })
  .catch(error => {
    console.error(error);
   
});
  });

  module.exports = router;