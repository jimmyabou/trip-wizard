const db = require('../../configs/db.config');

const getAllAttractions = () => {
  return db.query("SELECT * FROM attractions;")
    .then(attractions => {
      return attractions.rows;
    });
};

module.exports = { getAllAttractions };