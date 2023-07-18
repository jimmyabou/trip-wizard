const express = require('express');
const router = express.Router();
const attractionQueries = require('../db/queries/dayQueries.js');

router.get('/:dayId', async (req, res) => {
  try {
    const { dayId } = req.params;
    const attractions = await attractionQueries.getAttractionsAndTotalsByDayId(dayId);
    console.log({attractions})
    res.json({ attractions });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
