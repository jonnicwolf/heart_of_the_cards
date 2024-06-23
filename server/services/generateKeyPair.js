import crypto from 'crypto-js';

function generateKeyPair () {
  return crypto.generateKeyPairSync('rsa',{
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem'
    }
  });
};

module.exports = { generateKeyPair };
