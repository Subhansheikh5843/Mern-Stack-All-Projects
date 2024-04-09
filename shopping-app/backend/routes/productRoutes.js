const express = require("express");
const {
  getProducts,
  getProduct,
} = require("../controllers/productsController");

const router = express.Router();

//get routes for all products
router.get("/products", getProducts);

router.get("/products/:id", getProduct);

module.exports = router;
