const express = require('express');
const router = express.Router();
const userFavourites = require('../db/queries/userFavourites');

router.get('/favourites', (req, res) => {
  attractions.getFeaturedAttractions().then(data => {
    res.json({ attractions: data });
  });
});

router.post('/favorites', async (req, res) => {
  const { user_id, attraction_id } = req.body;

  try {
    const result = await handleUserFav(user_id, attraction_id);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(500).json({ error: 'Failed to favorite attraction' });
  }
});



module.exports = router;