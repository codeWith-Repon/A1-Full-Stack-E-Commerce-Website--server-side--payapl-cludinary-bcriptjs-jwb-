const mongoose = require("mongoose");

// create Schema
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    uniqe: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

// create model
const User = mongoose.model("User", UserSchema);

module.exports = User;

