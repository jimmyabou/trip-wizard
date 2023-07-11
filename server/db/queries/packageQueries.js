const db = require('../../configs/db.config');

const createPackage = (userId, packageName) => {
  console.log('reached DB')
  const query = 'INSERT INTO packages (user_id, name) VALUES ($1, $2) ';
  const values = [userId, packageName];

  return db.query(query, values)
    .then(() => ({ success: true }))
    .catch(error => {
      console.error(error);
      return { success: false };
    });
};


const getPackagesByUserId = (userId) => {
  const query = 'SELECT * FROM packages WHERE user_id = $1 ORDER BY package_id DESC';
  const values = [userId];

  return db.query(query, values)
    .then(result => result.rows)
    .catch(error => {
      console.error(error);
    });
};

const updatePackage = (packageId, packageName) => {
  const query = 'UPDATE packages SET package_name = $2 WHERE package_id = $1 ';
  const values = [packageId, packageName];

  return db.query(query, values)
    .then(result => result.rows[0])
    .catch(error => {
      console.error(error);
    });
};

const deletePackage = (packageId) => {
  const query = 'DELETE FROM packages WHERE package_id = $1 ';
  const values = [packageId];

  return db.query(query, values)
    .then(result => result.rows[0])
    .catch(error => {
      console.error(error);
    });
};

module.exports = {
  createPackage,
  updatePackage,
  deletePackage,
  getPackagesByUserId
};
