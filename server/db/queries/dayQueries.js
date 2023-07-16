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

// const deleteAndReassignAttractions = async (dayId, attractionsArray) => {
//   try {
//     // Delete existing attractions for the day
//     await db.query("DELETE FROM day_attractions WHERE day_id = $1", [dayId]);

//     // Reassign attractions based on the order array index
//     for (let i = 0; i < attractionsArray; i++) {
//       const attractionId = attractionsArray[i];
//       const query =
//         "INSERT INTO day_attractions (day_id, attraction_id) VALUES ($1, $2)";
//       const values = [dayId, attractionId];
//       await db.query(query, values);
//     }

//     console.log("success");
//   } catch (error) {
//     console.error(error);
//   }
// };

const getAttractionsByDayId = (dayId) => {
  // const query = `SELECT attractions.*
  //               FROM attractions
  //               JOIN day_attractions ON attractions.attraction_id = day_attractions.attraction_id
  //               WHERE day_attractions.day_id = $1`;
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




module.exports = {
  addDay,
  deleteDay,
  // deleteAndReassignAttractions,
  getDaysByPackageId,
  getAttractionsByDayId,
  insertAttractionsByDay,
  deleteAttractionFromDay
};
