const db = require('../db/dbConfig.js');

const get_allUsers = async () => {
  try {
    const users = await db.any('SELECT * FROM users');
    return users }
  catch (error) {
    console.error(error) };
};

const get_userByID = async (id) => {
  try {
    const user = await db.one(`SELECT * FROM users WHERE id=${id}`);
    return user;
  }
  catch (error) {
    console.error(error);
  };
};



 const put_newUser = async (id ,newUser) => {
  const { username, email, password_hash } = newUser;

  try {
    const user = await db.one(`UPDATE users SET username=$1, email=$2, password_hash=$3 WHERE id='${id}' RETURNING *`, [username, email, password_hash,]);
    return user;
  }
  catch (error) {
    console.error(error);
  }
 }
