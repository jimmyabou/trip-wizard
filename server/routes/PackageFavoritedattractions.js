const express = require("express");
const router = express.Router();
const dayQueries = require("../db/queries/dayQueries.js");

router.get("/:userId", (req, res) => {
  const { userId } = req.params;
  console.log("reached the route");
  dayQueries
    .getPackageFavoritedattractions(userId)
    .then((attractions) => {
      res.json({ attractions });
    })
    .catch((error) => {
      console.error(error);
      res.json({ message: "error" });
    });
});

module.exports = router;
