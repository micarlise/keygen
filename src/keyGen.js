const crypto = require('crypto');
const util = require('util');

const randomBytes = util.promisify(crypto.randomBytes);

function keyGen(keySize) {

    if (!keySize) {
        keySize = 8;
    }

    return randomBytes(keySize)
        .then(b => b.toString('hex'));
}

module.exports = keyGen; 
