

const express = require("express");
const { authController,getUserProfile,registerUser, updateUserProfile } = require("../controllers/usersController");
const { protect } = require("../middlewares/authMiddleware");



const router = express.Router();

//get routes for all products
router.post("/", registerUser);

router.post("/login", authController);


router.get("/profile",protect,getUserProfile);
router.put("/profile",protect,updateUserProfile);


module.exports = router;
