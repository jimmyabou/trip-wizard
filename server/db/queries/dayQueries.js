const db = require('../../configs/db.config');

const createDay = (packageId, date) => {
  const query = 'INSERT INTO days (package_id, date) VALUES ($1, $2)';
  const values = [packageId, date];

  return db.query(query, values)
    .then(result => result.rows[0])
    .catch(error => {
      console.error(error);
    });
};


const deleteDay = (dayId) => {
  const query = 'DELETE FROM days WHERE id = $1';
  const values = [dayId];

  return db.query(query, values)
    .then(result => result)
    .catch(error => {
      console.error(error);
    });
};

const deleteAndReassignAttractions = async (dayId, order) => {
  try {
    // Delete existing attractions for the day
    await db.query('DELETE FROM attractions WHERE day_id = $1', [dayId]);

    // Reassign attractions based on the order array index
    for (let i = 0; i < order.length; i++) {
      const attractionId = order[i];
      const query = 'INSERT INTO attractions (day_id, attraction_id, order) VALUES ($1, $2, $3)';
      const values = [dayId, attractionId, i + 1];
      await db.query(query, values);
    }

    console.log('success');
  } catch (error) {
    console.error(error);
  }
};


module.exports = {
  createDay,
  deleteDay,
  deleteAndReassignAttractions,
  deleteAttraction,
  addAttraction,
};
