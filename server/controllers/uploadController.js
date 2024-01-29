const express = require("express");
const multer = require("multer");
const { Post } = require("../Models/Post");

//setting up multer

const storage = multer.diskStorage({
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

const addPost = async (req, res) => {
  const { title, caption } = req.body;
  const { filename } = req.file;
  console.log(req.file);
  const post = new Post({
    title,
    caption,
    image: filename,
  });
  try {
    await post.save();
    res.status(201).json({ message: "Post created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { upload, addPost };
