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
  return db.query("SELECT * FROM attractions; WHERE city = $1;", [city])
    .then(attractions => {
      return attractions.rows;
    });
};

const getAttractionsByCategory = (category) => {
  return db.query("SELECT * FROM attractions; WHERE category = $1;", [category])
    .then(attractions => {
      return attractions.rows;
    });
};
module.exports = { getAllAttractions, getFeaturedAttractions, getAttractionsByCity, getAttractionsByCategory };