const express = require("express");
const multer = require("multer");
const { Post } = require("../Models/Post");

// Setting up multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB file size limit
  },
}).single("image");

const addPost = async (req, res) => {
  const { title, caption } = req.body;
  const image = req.file; // Use req.file instead of req.image
  console.log(image);

  if (!image) {
    return res.status(400).json({ message: "No image uploaded" });
  }

  const post = new Post({
    title,
    caption,
    image: image.filename, // Assuming you want to save the filename in the database
  });

  try {
    await post.save();
    res.status(201).json({ message: "Post created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}, { _id: 0 });
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { upload, addPost, getPosts };
