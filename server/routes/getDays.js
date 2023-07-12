const express = require('express');
const router = express.Router();
const dayQueries = require('../db/queries/dayQueries.js');

router.get('/:packageId', (req, res) => {
  const { packageId } = req.params;
  dayQueries.getDaysByPackageId(packageId)
    .then(days => {
      res.json({ days });
    })
    .catch(error => {
      console.error(error);
      res.json({ message: 'error' });
    });
});

module.exports = router;
