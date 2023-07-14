const express = require('express');
const router = express.Router();
const attractionQueries = require('../db/queries/dayQueries.js');

router.post('/:dayId', async (req, res) => {
  try {
    const { dayId } = req.params;
    const { attractions } = req.body;
    await attractionQueries.insertAttractionsByDay(dayId, attractions);
    res.json('success');
  } catch (error) {
    console.error(error);
  }
});


module.exports = router;
