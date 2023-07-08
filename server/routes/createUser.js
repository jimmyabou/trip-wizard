const express = require('express');
const router = express.Router();
const createUser = require('../db/queries/createUser.js');

router.post('/', (req, res) => {
  const { username, password, email, address, phone_number } = req.body;
  console.log("recieved request from axios")
  createUser.createUser(username, password, email, address, phone_number)
  .then(response => {
    res.json(response);
  })
  .catch(error => {
    console.error(error);
    res.sendStatus(500);
});
  });

  module.exports = router;