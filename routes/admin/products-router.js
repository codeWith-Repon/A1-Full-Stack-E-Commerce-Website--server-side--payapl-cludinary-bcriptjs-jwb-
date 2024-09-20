const express = require("express");

const {
  handleImageUpload,
} = require("../../controllers/admin/products-controller");

const { upload } = require("../../Helpers/cloudinary");

const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
