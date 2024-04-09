const express = require('express')
const { loginController, registerController } = require('../controllers/userController')

//router
const router = express.Router()


//Routers

//POST || LOGIN USEER
router.post('/login',loginController)
//POST || REGISTER USER
router.post('/register',registerController)



module.exports = router