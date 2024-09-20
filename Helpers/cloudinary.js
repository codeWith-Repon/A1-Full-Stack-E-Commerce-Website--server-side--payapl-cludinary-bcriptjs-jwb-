const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dccypxuz0",
  api_key: "853738973769598",
  api_secret: "Qz65z9fTH_7h0k7lk0MOSI4Sp8o",
});
const storage = new multer.memoryStorage();

async function handleImageUpload(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}

const upload = multer({ storage });

module.exports = { upload, handleImageUpload };
