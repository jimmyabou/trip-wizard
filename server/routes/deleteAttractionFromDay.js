const express = require('express');
const router = express.Router();
const attractionQueries = require('../db/queries/dayQueries.js');

router.delete('/', async (req, res) => {
  try {
    const { dayId, attractionId } = req.body;
    await attractionQueries.deleteAttractionFromDay(dayId, attractionId);
    res.json({ dayId, attractionId, message: 'Attraction deleted' });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
