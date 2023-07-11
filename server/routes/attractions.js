const express = require('express');
const router = express.Router();
const attractions = require('../db/queries/attractions.js');

router.get('/', (req, res) => {
  attractions.getAllAttractions().then(data => {
    res.json({ attractions: data });
  });
});

router.get('/featured', (req, res) => {
  attractions.getFeaturedAttractions().then(data => {
    res.json({ attractions: data });
  });
});


router.get('/cities', (req, res) => {
  attractions.getAllAttractionsCities().then(data => {
    res.json({ attractions: data });
  });
});


module.exports = router;