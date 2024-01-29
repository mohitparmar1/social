const express = require("express");
const cors = require("cors");
const { Register, Login } = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken");
const { addPost, upload, getPosts } = require("../controllers/postController");

const router = express.Router();

router.post("/signup", Register);
router.post("/login", Login);

// protected route

router.post("/upload", upload, addPost);
router.get("/getPosts", getPosts);

module.exports = router;
