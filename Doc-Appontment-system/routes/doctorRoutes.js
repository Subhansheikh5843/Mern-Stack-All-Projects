
const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware');
const { getDoctorInfoController, updateProfileController, getDoctorByIdController,doctorAppointmentsController, updateStatusController } = require('../controllers/doctorCtrl');




const router = express.Router()

//post Single DOC Info

router.post('/getDoctorInfo',authMiddleware,getDoctorInfoController)

//POST UPDATE PROFILE
router.post('/updateProfile',authMiddleware,updateProfileController)

//post get Single Info

router.post('/getDoctorById',authMiddleware,getDoctorByIdController)

//Get Appointment
router.get('/doctor-appointments',authMiddleware,doctorAppointmentsController)


//POST Update status

router.post('/update-status',authMiddleware,updateStatusController)


module.exports = router