const db = require('../../configs/db.config');

const createPackage = (userId, packageName) => {
  const query = 'INSERT INTO packages (user_id, package_name) VALUES ($1, $2) ';
  const values = [userId, packageName];

  return db.query(query, values)
    .then(result => result.rows[0])
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
};
