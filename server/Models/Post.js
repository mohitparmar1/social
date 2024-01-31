const mongoose = require("mongoose");
const { User } = require("./User");

const postSchema = new mongoose.Schema({
  title: String,
  caption: String,
  image: String, // Store the file path in the database
  date: {
    type: Date,
    default: Date.now,
  },
  userName: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
  Likes: {
    type: Number,
    default: 0,
  },
 
});

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
