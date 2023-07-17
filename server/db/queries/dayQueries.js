const db = require("../../configs/db.config");

const addDay = (packageId, date, title, description) => {
  const query =
    "INSERT INTO days (package_id, date, day_title,day_description) VALUES ($1, $2, $3, $4)";
  const values = [packageId, date, title, description];

  return db
    .query(query, values)
    .then((result) => result.rows[0])
    .catch((error) => {
      console.error(error);
    });
};

const getDaysByPackageId = (packageId) => {
  const query = "SELECT * FROM days WHERE package_id = $1 ORDER BY date";
  const values = [packageId];

  return db
    .query(query, values)
    .then((result) => result.rows)
    .catch((error) => {
      console.error(error);
    });
};

const deleteDay = (dayId) => {
  const query = "DELETE FROM days WHERE day_id = $1";
  const values = [dayId];

  return db
    .query(query, values)
    .then((result) => result)
    .catch((error) => {
      console.error(error);
    });
};

const getAttractionsByDayId = (dayId) => {
  const query = `
    SELECT a.*, d.total_duration
    FROM attractions a
    JOIN (
      SELECT da.attraction_id, SUM(attractions.duration) AS total_duration
      FROM day_attractions da
      JOIN attractions ON da.attraction_id = attractions.attraction_id
      WHERE da.day_id = $1
      GROUP BY da.attraction_id
    ) d ON a.attraction_id = d.attraction_id;
    
  `;
  const values = [dayId];

  return db
    .query(query, values)
    .then((result) => result.rows)
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
const insertAttractionsByDay = async (dayId, attractionIds) => {
  const query = `INSERT INTO day_attractions (day_id, attraction_id)
                 VALUES ($1, $2) ON CONFLICT DO NOTHING`;

  for (let i = 0; i < attractionIds.length; i++) {
    const attractionId = attractionIds[i];
    try {
      await db.query(query, [dayId, attractionId]);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

const deleteAttractionFromDay = async (dayId, attractionId) => {
  const query = `DELETE FROM day_attractions
                 WHERE day_id = $1 AND attraction_id = $2`;
  try {
    await db.query(query, [dayId, attractionId]);
  } catch (error) {
    console.error(error);
  }
};

//get favorited attractios and display them in the modal to add to the package day

const getPackageFavoritedattractions = (userId) => {
  console.log("reached pg");
  const favoritedAttractionsPromise = db.query(
    `SELECT attractions.*
     FROM attractions 
     INNER JOIN favorite_attractions ON attractions.attraction_id = favorite_attractions.attraction_id AND favorite_attractions.user_id = $1;`,
    [userId]
  );

  const randomAttractionsPromise = db.query(
    `SELECT attractions.*
     FROM attractions 
     WHERE attractions.attraction_id NOT IN (
       SELECT attraction_id
       FROM favorite_attractions
       WHERE user_id = $1
     )
     ORDER BY RANDOM();`,
    [userId]
  );

  return Promise.all([favoritedAttractionsPromise, randomAttractionsPromise])
    .then(([favoritedAttractions, randomAttractions]) => {
      const favoritedAttractionsRows = favoritedAttractions.rows;
      const randomAttractionsRows = randomAttractions.rows;

      return [...favoritedAttractionsRows, ...randomAttractionsRows];
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

module.exports = {
  addDay,
  deleteDay,
  getDaysByPackageId,
  getAttractionsByDayId,
  insertAttractionsByDay,
  deleteAttractionFromDay,
  getPackageFavoritedattractions,
};
