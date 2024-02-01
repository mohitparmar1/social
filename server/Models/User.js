const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  followers: {
    type: ObjectId,
    ref: "User",
  },
  following: {
    type: ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
