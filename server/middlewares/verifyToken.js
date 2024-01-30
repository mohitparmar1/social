const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    // Attach user information to the request object
    req.user = decoded;

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired" });
    }

    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = verifyToken;
