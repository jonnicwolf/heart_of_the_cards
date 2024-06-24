import { decryptPrivateKey } from '../services/encryption';

const db = require('../db/dbConfig.js');

const get_allHistoryByUser = async (id, user) => {
  const { password, privateKey } = user;
  try {
    try {
      const decryptedPrivateKey = await decryptPrivateKey(privateKey, password);
      

    } catch (error) { console.error(error) }
    const allHistory = await db.any(`SELECT * FROM user_history WHERE id=${id}`);

    return allHistory;
  } catch (error) {
    console.error(error);
  };
};

const get_last = async (id) => {
  try {
    const last = await db.one(`SELECT * FROM user_history WHERE id=${id} ORDER BY created DESC LIMIT 1`);

    return last;
  } catch (error) {
    console.error(error);
  };
};

module.exports = {
  get_allHistoryByUser,
  get_last,
};
