const express = require("express");
const cors = require("cors");
const { Register, Login } = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken");
const { addPost, upload, getPosts, followers } = require("../controllers/postController");

const router = express.Router();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

router.use(cors(corsOptions));

router.post("/signup", Register);
router.post("/login", Login);



// protected route

router.post("/upload", verifyToken, upload, addPost);
router.get("/getPosts",verifyToken, getPosts);

module.exports = router;
