const express = require("express");
const {
  getFiltteredProducts,
} = require("../../controllers/shop/product-controller");

const router = express.Router();

router.get("/get", getFiltteredProducts);

module.exports = router;
