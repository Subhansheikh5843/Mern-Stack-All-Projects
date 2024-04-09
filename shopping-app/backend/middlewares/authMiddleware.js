const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const dotenv = require('dotenv')
dotenv.config()

const User = require("../models/UserModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) 
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWY_KEY);
      req.user = await User.findById(decode.id).select('-password')

         next();
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error(" token Failed");

    }
    if (!token) {
      res.status(401);
      throw new Error("Not Authorized, not token");
    }
  

});

module.exports ={ protect};
