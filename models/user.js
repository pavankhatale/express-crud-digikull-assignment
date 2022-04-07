const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userr: {
    type: String,
  },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
