const express = require("express");
const {
  addProductReviews,
  getProductReviews,
} = require("./product-review-controller");

const router = express.Router();

router.post("/add", addProductReviews);
router.get("/:productId", getProductReviews);

module.exports = router;
