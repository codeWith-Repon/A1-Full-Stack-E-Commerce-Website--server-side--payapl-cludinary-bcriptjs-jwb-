const express = require("express");
const {
  addFeatureImage,
  getFeatureImage,
} = require("../admin/Feature-controller");

const router = express.Router();

router.post("/add", addFeatureImage);
router.get("/get", getFeatureImage);

module.exports = router;
