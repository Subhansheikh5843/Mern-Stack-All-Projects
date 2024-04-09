

const express = require("express");

const { protect } = require("../middlewares/authMiddleware");
const { addOrderItem, getOrderById, updateOrderToPaid, getMyOrders } = require("../controllers/orderController");



const router = express.Router();




//get routes for all products
router.post("/",protect,addOrderItem);
router.get("/:id",protect,getOrderById);
router.put("/:id/pay",protect,updateOrderToPaid);
// router.get("/myOrders",protect,getMyOrders);
router.route("/").get(protect, getMyOrders);




module.exports = router;
