const express = require("express");
const {
  addTransection,
  getAllTransection,
  editTransection,
  deleteTransection
} = require("../controllers/transectionCtrl");

//router
const router = express.Router();

//Routers

//add transection || POST
router.post("/add-transection", addTransection);

//Edit transection || POST
router.post("/edit-transection", editTransection);

//delete transection || POST
router.post("/delete-transection", deleteTransection);

//get transection || GET
router.post("/get-transection", getAllTransection);

module.exports = router;
