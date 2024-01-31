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
  // followers: {
  //   type: ObjectId,
  //   ref: "user",
  // },
  // following: {
  //   type: ObjectId,
  //   ref: "user",
  // },
});

const User = mongoose.model("user", userSchema);

const newUser = new User({
  name: 1,
  email: 2,
  password: 3,
});

module.exports = { User };


const parentSchema = mongoose.Schema({
  children: [{ name: String }],
});
