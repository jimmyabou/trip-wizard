const db = require('../../configs/db.config');

const getAllAttractions = () => {
  return db.query("SELECT * FROM attractions;")
    .then(attractions => {
      return attractions.rows;
    });
};


const getFeaturedAttractions = () => {
  return db.query("SELECT *FROM attractions WHERE featured = 't';")
    .then(attractions => {
      return attractions.rows;
    });
};


const getAttractionsByCity = (city) => {
  return db.query("SELECT * FROM attractions WHERE city = $1;", [city])
    .then(attractions => {
      return attractions.rows;
    });
};

const getAttractionsByCategory = (category) => {
  return db.query("SELECT * FROM attractions WHERE category = $1;", [category])
    .then(attractions => {
      return attractions.rows;
    });
};

const getAllAttractionsCities = () => {
  return db.query("SELECT DISTINCT city FROM attractions; ")
    .then(attractions => {
      return attractions.rows;
    });
};

const getAttractionbyId = (attraction_id) => {
  return db.query("SELECT * FROM attractions WHERE attraction_id = $1;", [attraction_id])
    .then(attraction => {
      return attraction.rows[0];
    });
};

module.exports = {
  getAllAttractions,
  getFeaturedAttractions,
  getAttractionsByCity,
  getAttractionsByCategory,
  getAllAttractionsCities,
  getAttractionbyId
};