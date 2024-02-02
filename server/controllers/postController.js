const express = require("express");
const multer = require("multer");
const UploadOnCloudinary = require("../cloudinary");
const path = require("path");
const { User } = require("../Models/User");
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
}).single("image");

const addPost = async (req, res) => {
  const { title, caption } = req.body;
  const image = req.file; // Use req.file instead of req.image
  if (!image) {
    return res.status(400).json({ message: "No image uploaded" });
  }

  try {
    const response = await UploadOnCloudinary(image.path);
    const cloudinaryUrl = response.url;
    const post = new Post({
      title,
      caption,
      image: cloudinaryUrl,
      PostedBy: req.user._id,
    });

    await post.save();
    res.status(201).json({ message: "Post created", post });
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
