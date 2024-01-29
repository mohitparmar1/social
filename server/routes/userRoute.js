const express = require("express");
const { Register, Login } = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken");
const { addPost, upload } = require("../controllers/uploadController");

const router = express.Router();

router.post("/signup", Register);
router.post("/login", Login);

// protected route

router.post("/upload",verifyToken, upload.single("image"), addPost);

module.exports = router;
