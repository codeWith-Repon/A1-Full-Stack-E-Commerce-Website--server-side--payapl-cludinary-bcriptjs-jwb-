const express = require("express");
const {
  getFiltteredProducts,
  getProductDetails,
} = require("../../controllers/shop/product-controller");

const router = express.Router();

router.get("/get", getFiltteredProducts);
router.get("/get/:id", getProductDetails)

module.exports = router;
