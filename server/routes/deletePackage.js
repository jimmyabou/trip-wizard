const express = require("express");
const router = express.Router();
const packageQueries = require("../db/queries/packageQueries.js");

router.delete("/:packageId", (req, res) => {
  const { packageId } = req.params;
  packageQueries
    .deletePackage(packageId)
    .then(() => {
      res.send(`package deleted ${packageId}`);
    })
    .catch((error) => {
      console.error(error);
    });
});

module.exports = router;
