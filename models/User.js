const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", UserScheme);
module.exports = User;
