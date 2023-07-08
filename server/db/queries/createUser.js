const db = require('../../configs/db.config');

const createUser = async (username, password, email, address, phone_number) => {
  try {
    const query = 'INSERT INTO users (username, password, email, address, phone_number) VALUES ($1, $2, $3, $4, $5)';
    const values = [username, password, email, address, phone_number];
    console.log("before query")
    await db.query(query, values);

    return 'User created successfully';
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
};

module.exports = {
  createUser,
};
