import { decryptPrivateKey } from '../services/encryption';

const db = require('../db/dbConfig.js');

const get_allHistoryByUser = async (id, user) => {
  const { password, privateKey } = user;
  try {
    const decryptedPrivateKey = await decryptPrivateKey(privateKey, password);
    const allHistory = await db.any(`SELECT * FROM user_history WHERE id=${id} AND private_key = $2`,[id, decryptedPrivateKey]);

    return allHistory;
  } catch (error) {
    console.error(error);
  };
};

const get_last = async (id) => {
  try {
    const decryptedPrivateKey = await decryptPrivateKey(privateKey, password);
    const last = await db.one(`SELECT * FROM user_history WHERE id = $1 AND private_key = $2 ORDER BY created DESC LIMIT 1`, [id, decryptedPrivateKey]);

    return last;
  } catch (error) {
    console.error(error);
  };
};

module.exports = {
  get_allHistoryByUser,
  get_last,
};
