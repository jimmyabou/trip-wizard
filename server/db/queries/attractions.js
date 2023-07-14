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

const getAttractionsWithFilters = (categories, price, rating, city) => {

  // Construct the SQL query with filters
  let sql = `
    SELECT *
    FROM attractions
  `;

  // Create an array to store the WHERE conditions
  const conditions = [];

  // Add category filter using the LIKE statement with wildcard
  if (categories && categories.length > 0) {
    const categoryConditions = categories.map(category => `category LIKE '%${category}%'`).join(' OR ');
    conditions.push(categoryConditions);
  }

  // Add price filter
  if (price && price.length === 2) {
    conditions.push(`price BETWEEN ${price[0]} AND ${price[1]} `);
  }

  // Add rating filter
  if (rating && rating.length === 2) {
    conditions.push(`rating BETWEEN ${rating[0]} AND ${rating[1]}`);
  }

  // Add city filter
  if (city && city !== 'Location') {
    conditions.push(`city = '${city}'`);
  }

  // Append WHERE clause if any conditions exist
  if (conditions.length > 0) {
    sql += `WHERE ${conditions.join(' AND ')}`;
  }

  sql += ';';

  return db
    .query(sql)
    .then((attractions) => {
      return attractions.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
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