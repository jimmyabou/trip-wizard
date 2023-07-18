const express = require("express");
const router = express.Router();
const dayQueries = require("../db/queries/dayQueries.js");

router.delete("/:dayId", (req, res) => {
  const { dayId } = req.params;
  dayQueries
    .deleteDay(dayId)
    .then(() => {
      res.json({ message: "day deleted" });
    })
    .catch((error) => {
      console.error(error);
    });
});

module.exports = router;
