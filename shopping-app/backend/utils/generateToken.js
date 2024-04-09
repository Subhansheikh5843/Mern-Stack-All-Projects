const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

 const generateTokenn = (id) => {
  return jwt.sign({ id }, process.env.JWY_KEY, {
    expiresIn: "15d",
  });
};

module.exports = generateTokenn
