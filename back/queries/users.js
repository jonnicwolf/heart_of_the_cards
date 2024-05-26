const db = require('../db/dbConfig.js');

const getAllUsers = async () => {
  try {
    const users = await db.any('SELECT * FROM users');
    return users }
  catch (err) {
    console.error(err) };
};

