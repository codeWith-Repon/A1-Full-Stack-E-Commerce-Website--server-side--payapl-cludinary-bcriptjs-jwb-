const express = require("express");
const {
  addProductReviews,
  getProductReviews,
} = require("../../controllers/shop/product-review-controller");

const router = express.Router();

router.post("/add", addProductReviews);
router.get("/:productId", getProductReviews);

module.exports = router;
