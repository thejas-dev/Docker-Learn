const jwt = require('jsonwebtoken');

// Validate the jwt token against the valid date
const validToken = (token) => {
    const decodedToken = jwt.verify(token, 'my-secret');
    return decodedToken.exp > Math.floor(Date.now() / 1000);
}

// Helper function to generate an auth token with secret ('my-secret') with expiration of 1 day
const generateToken = (payload) => {
    return jwt.sign(payload,'my-secret', { expiresIn: '1d' });
}

// Decode the database _id from the token
const decodeToken = (token) => {
    return jwt.decode(token).id;
}

module.exports = { validToken, generateToken, decodeToken };