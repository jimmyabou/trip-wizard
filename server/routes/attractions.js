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

router.get('/:city', (req, res) => {
  const { city } = req.params;

  attractions.getAttractionsByCity(city)
    .then(data => {
      res.json({ attractions: data });
    })
    .catch(error => {
      res.status(500).json({ error: `Failed to fetch attractions for ${city}` });
    });
});

router.get('/attraction/:attraction_id', (req, res) => {
  const { attraction_id } = req.params;
  console.log("reached server");
  attractions.getAttractionbyId(attraction_id)
    .then(attraction => {
      res.json({ attraction: attraction });
    }).catch(error => {
      res.status(500).json({ error: `Failed to fetch attractions for attraction id ${attraction_id}` });
    });
});

module.exports = router;