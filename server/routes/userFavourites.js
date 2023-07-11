const express = require('express');
const router = express.Router();
const userFavorites = require('../db/queries/userFavourites');

router.get('/:user_id', (req, res) => {
  const { user_id } = req.params;

  userFavorites.getUserFavAttractions(user_id)
    .then(data => {
      res.json({ attractions: data });
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch user favorites' });
    });
});

router.post('/:user_id', async (req, res) => {
  const { user_id, attraction_id } = req.body;

  try {
    const result = await userFavorites.handleUserFav(user_id, attraction_id);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(500).json({ error: 'Failed to favorite attraction' });
  }
});

module.exports = router;
