const jwt = require("jsonwebtoken");

const createTokenForLogin = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });
};

module.exports = { createTokenForLogin };