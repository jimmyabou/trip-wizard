const express = require('express');
const router = express.Router();
const packageQueries = require('../db/queries/packageQueries.js');

router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  packageQueries.getPackagesByUserId(userId)
    .then(packages => {
      console.log(packages)
      res.json({packages});
    })
    .catch(error => {
      console.error(error);
    });
});

module.exports = router;
