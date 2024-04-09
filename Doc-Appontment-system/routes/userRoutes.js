const express = require('express');
const { loginController, registerController,authController,applyDoctorController,getAllNotificationController,deleteAllNotificationController, getAllDoctorController,bookAppointmentController,bookingAvailabilityController,userAppointmentsController } = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

//routeer object
const router = express.Router();

//routes

//Login || post
router.post('/login',loginController)


//register || post

router.post('/register',registerController)


//Auth || POST

router.post('/getUserData',authMiddleware,authController)

//apply doctor || POST
router.post('/apply-doctor',authMiddleware,applyDoctorController)



//Notification dOCTOR || pOST
router.post('/get-all-notification',authMiddleware,getAllNotificationController)


////Notification delete || POST
router.post('/delete-all-notification',authMiddleware,deleteAllNotificationController)


//Get ALl Doc
router.get('/getAllDoctors',authMiddleware,getAllDoctorController)


//BOOK APPOINTMENT

router.post('/book-appointment',authMiddleware,bookAppointmentController)

//Booking Availability
router.post('/booking-availbility',authMiddleware,bookingAvailabilityController)

//apointments list
router.get('/user-appointments',authMiddleware,userAppointmentsController)




module.exports = router