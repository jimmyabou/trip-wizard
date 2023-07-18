const express = require("express");
const router = express.Router();
const packageQueries = require("../db/queries/packageQueries.js");

router.post("/", (req, res) => {
  const { packageName, userId } = req.body;
  console.log(packageName, userId);
  packageQueries
    .createPackage(userId, packageName)
    .then((result) => {
      if (result.success) {
        res.json({ message: `Package ${packageName} created successfully` });
      } else {
        res.status(500).json({ error: "Failed to create package" });
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
module.exports = router;
