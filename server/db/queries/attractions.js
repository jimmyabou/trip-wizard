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

const getAttractionsWithFilters = ( categories, price, rating) => {

  //if no city provided then use filter on all cities
  console.log("here: ",  categories, price, rating);


  // const queryString = `
  // SELECT *
  // FROM attractions
  // WHERE category LIKE '%Tasting%'
  //    OR category LIKE '%Cultural%'
  //    OR category LIKE '%Walking%'
  //    OR category LIKE '%Dining%'
  //    OR category LIKE '%Luxury%'
  //    OR category LIKE '%Sightsee%'
  //    AND rating BETWEEN $1 AND $2
  //    AND price BETWEEN $3 AND $4;
  //   `;
  // const values = [ratingMin, ratingMax, priceMin, priceMax];
  // return db
  //   .query(queryString, values)
  //   .then((attractions) => {
  //     return attractions.rows;
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   });
};




module.exports = {
  getAllAttractions,
  getFeaturedAttractions,
  getAttractionsByCity,
  getAttractionsByCategory,
  getAllAttractionsCities,
  getAttractionbyId,
  getAttractionsWithFilters
};