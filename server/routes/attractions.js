const express = require('express');
const router = express.Router();
const attractions = require('../db/queries/attractions.js');


router.get('/', (req, res) => {
  attractions.getAllAttractions().then(data => {
    res.json({ attractions: data });
  });
});

router.get('/featured', (req, res) => {
  console.log("featured");
  attractions.getFeaturedAttractions().then(data => {
    res.json({ attractions: data });
  });
});


router.get('/cities', (req, res) => {
  attractions.getAllAttractionsCities().then(data => {
    res.json({ attractions: data });
  });
});

router.get('/:city', (req, res) => {
  const { city } = req.params;

  attractions.getAttractionsByCity(city)
  .then(data => {
      console.log('city');
      res.json({ attractions: data });
    })
    .catch(error => {
      res.status(500).json({ error: `Failed to fetch attractions for ${city}` });
    });
});



module.exports = router;