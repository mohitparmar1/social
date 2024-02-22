const express = require("express");
const cors = require("cors");
const { Register, Login, Logout } = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken");
const {
  addPost,
  upload,
  getPosts,
  followers,
} = require("../controllers/postController");

const router = express.Router();

router.post("/signup", Register);
router.post("/login", Login);

// protected route

router.post("/upload", verifyToken, upload.single("image"), addPost);
router.get("/getPosts", verifyToken, getPosts);
router.get("/logout", verifyToken, Logout);

module.exports = router;
