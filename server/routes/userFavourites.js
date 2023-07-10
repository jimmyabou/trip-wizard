const express = require('express');
const router = express.Router();
const userFavourites = require('../db/queries/userFavourites');

router.get('/favourites', (req, res) => {
  attractions.getFeaturedAttractions().then(data => {
    res.json({ attractions: data });
  });
});


module.exports = router;