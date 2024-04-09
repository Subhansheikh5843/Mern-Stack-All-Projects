const express = require("express")
const authMiddleware = require('../middlewares/authMiddleware');
const { getAllUsersController, getAllDoctorsController,changeAccountStatusController } = require("../controllers/adminCtrl");

const router = express.Router()

//GET METOD || USER
router.get('/getAllUsers',authMiddleware,getAllUsersController)

//GET METOD || Doctors
router.get('/getAllDoctors',authMiddleware,getAllDoctorsController)

//POST ACCOUNT STATUS 
router.post('/changeAccountStatus',authMiddleware,changeAccountStatusController)


module.exports = router