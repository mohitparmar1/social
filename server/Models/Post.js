const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  caption: String,
  image: String, // Store the file path in the database
  date: {
    type: Date,
    default: Date.now,
  },
  PostedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
