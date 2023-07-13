const express = require('express');
const router = express.Router();
const dayQueries = require('../db/queries/dayQueries.js');

router.post('/:packageId', (req, res) => {
  const { packageId } = req.params;
  const { title, description, date } = req.body;
  dayQueries.addDay(packageId, date,title,description)
    .then(() => {
      res.json({ message: 'day added successfuly' });
    })
    .catch(error => {
      console.error(error);
      res.json({ message: 'error' });
    });
});

module.exports = router;