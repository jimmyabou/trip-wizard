var express = require('express');
var router = express.Router();
const users = require('../db/queries/users.js');
// const users = ['Bob', 'Alex', 'Will', 'Tristan'];
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.json(users);
// });
router.get('/', (req, res) => {
  users.getAllUsers().then(data => {
    console.log(data);
    res.json({users: data});
  })
});
module.exports = router;
