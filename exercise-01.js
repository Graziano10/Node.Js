

const crypto = require('crypto');

// crypto.getHashes().forEach((hash) => {
//     console.log(hash)
// });

const generateId = (length) => {
    const buffer = crypto.randomBytes(Math.ceil(length/2));
    const randomId = buffer.toString('Base64', 'hex').slice(0, length);
    return randomId
};

const x = generateId(10);

console.log(x);

