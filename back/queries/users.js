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

const get_userByEmail = async (email) => {
  try {
    const user = await db.one(`SELECT * FROM users WHERE email=${email}`);
    return user;
  }
  catch (error) {
    console.error(error);
  };
};

const post_newUser = async (id, user) => {
  try {
    const { username, email, password_hash} = user;

    const newUser = await db.one("INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *", [username, email, password_hash]);
    return newUser;
  } 
  catch (error) {
    console.error(error);
  };
};

const put_updateUser = async (id , user) => {
  const { username, email, password_hash } = user;

  try {
    const updatedUser = await db.one(`UPDATE users SET username=$1, email=$2, password_hash=$3 WHERE id='${id}' RETURNING *`, [username, email, password_hash]);
    return updatedUser;
  }
  catch (error) {
    console.error(error);
  };
 };

const delete_userByEmail = async (email) => {
  try {
    const user = await db.one(`DELETE FROM users WHERE email='${email}' RETURNING *`);
    return user;
  }
  catch (error) {
    console.error(error);
  };
};

const delete_userByID = async (id) => {
  try {
    const user = await db.one(`DELETE FROM users WHERE id='${id}' RETURNING *`);
    return user;
  }
  catch (error) {
    console.error(error);
  };
};
