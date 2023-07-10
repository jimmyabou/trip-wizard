const express = require('express');
const router = express.Router();
const attractions = require('../db/queries/attractions');

router.get('/', (req, res) => {
  attractions.getAllAttractions().then(attractions => {
    res.json(attractions);
  });
});

module.exports = router;