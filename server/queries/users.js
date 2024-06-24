import { generateKeyPair } from '../services/generateKeyPair.js';
import { encryptPrivateKey } from '../services/encryption.js';

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
  const { username, email, password } = user;
  try {
    const { publicKey, privateKey } = await generateKeyPair();
    const encryptedPrivateKey = await encryptPrivateKey(privateKey, password);
    const newUser = await db.one(
      "INSERT INTO users (username, email, public_key, private_key) VALUES ($1, $2, $3) RETURNING *",
      [username, email, publicKey,encryptedPrivateKey]);

    return newUser;
  } 
  catch (error) {
    console.error(error);
  };
};

const put_updateUser = async (id , user) => {
  const { username, email, password_hash } = user;

  try {
    const { publicKey, privateKey } = await generateKeyPair();
    const encryptedPrivateKey = await encryptPrivateKey(privateKey, password_hash);
    const updatedUser = await db.one(
      `UPDATE users SET username=$1, email=$2, password_hash=$3 WHERE id='${id}' RETURNING *`,
      [username, email, publicKey, encryptedPrivateKey]);

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

module.exports = {
  get_allUsers,
  get_userByID,
  get_userByEmail,
  post_newUser,
  put_updateUser,
  delete_userByEmail,
  delete_userByID,
};
