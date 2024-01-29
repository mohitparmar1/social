const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = async (req, res, next) => {
  const token = await req.cookies.token;
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (verified) {
      next();
    } else {
      return res.status(401).json({ message: "problem while jwt verifing" });
    }
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired" });
    }

    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = verifyToken;
