const asyncHandler = require("express-async-handler");


const User = require("../models/UserModel");
const generateTokenn = require("../utils/generateToken");


const registerUser = asyncHandler(async(req,res)=>{
  const {name,email,password} = req.body
  const userExist = await User.findOne({email})
  if (userExist) {
    res.status(400)
    throw new Error('User Already Exists')
  }
  const user = await User.create({name,email,password})
  if (user) {
    res.status(201).json({
      _id:user._id,
      name:user.name,
      email:user.email,
      isAdmin:user.isAdmin,
     token: generateTokenn(user._id)
    })
  }else{
    res.status(404);
    throw new Error("User Not Found")
  }
})

const authController = asyncHandler(async(req,res)=>{
  const {email,password} = req.body
  const user = await User.findOne({email})
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id:user._id,
      name:user.name,
      email:user.email,
      isAdmin:user.isAdmin,
     token: generateTokenn(user._id)
    })
  }else{
    res.status(401);
    throw new Error("Invalid Email or Password")
  }

})

const getUserProfile = asyncHandler(async(req,res)=>{
const user = await User.findById(req.user._id)
if (user) {
  res.json({
    _id:user._id,
    name:user.name,
    email:user.email,
    isAdmin:user.isAdmin,

  })
}else{
  res.status(404);
  throw new Error("User Not Found")
}

})

const updateUserProfile = asyncHandler(async(req,res)=>{
  const user = await User.findById(req.user._id)
  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
    user.password = req.body.password
      
    }
    const updateUser = await user.save()
    res.json({
      _id:updateUser._id,
      name:updateUser.name,
      email:updateUser.email,
      isAdmin:updateUser.isAdmin,
     token: generateTokenn(updateUser._id)
    })
  }else{
    res.status(404)
    throw new Error('User Not Found')
  }
})




module.exports = {authController,getUserProfile,registerUser,updateUserProfile}