const db = require('../../configs/db.config');

const getFavAttractionIdsFromUser = (user_id) => {
  return db.query("SELECT * FROM favorite_attractions WHERE user_id = $1;", [user_id])
    .then(attraction_ids => {
      return attraction_ids.rows;
    })
    .catch(error => {
      console.error("Error fetching favorite attractions for this user:", error);
      throw error; // Rethrow the error to be caught by the caller
    });
};

const getAttractionById = (attraction_id) => {
  return db.query("SELECT * FROM attractions WHERE attraction_id = $1;", [attraction_id])
    .then(attraction => {
      return attraction.rows[0]; // Assuming only one row is returned
    });
};

const getUserFavAttractions = (user_id) => {
  return getFavAttractionIdsFromUser(user_id)
    .then(attraction_ids => {
      const attractionPromises = attraction_ids.map(attraction_id => getAttractionById(attraction_id));
      return Promise.all(attractionPromises);
    });
};

module.exports = { getUserFavAttractions };