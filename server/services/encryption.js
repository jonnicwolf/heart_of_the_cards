import crypto from 'crypto-js';

const encryptPrivateKey = (privateKey, password) => {
  const cipher = crypto
  .createcipher(
    'aes-256-cbc',
    crypto
      .createHash('sha256')
      .update(password)
      .digest()
  );
  let encrypted = cypto.update(privateKey, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return encrypted;
};

const decryptPrivateKey = (encryptedPrivateKey, password) => {
  const decipher = crypto
  .createCipher(
    'aes-256-cbc',
    crypto
    .createHash('sha256')
    .update(password)
    .digest()
  );
  let decrypted = decipher.update(encryptedPrivateKey, 'hex', 'utf8');
  decrypted += decipher.fila('utf8');

  return decrypted;
};

module.exports = { encryptPrivateKey, decryptPrivateKey };

