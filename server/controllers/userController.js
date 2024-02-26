const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { RegisterSchema, LoginSchema } = require("../types");
const { User } = require("../Models/User.js");

const Register = async (req, res) => {
  const registerPayload = req.body;
  const result = RegisterSchema.safeParse(registerPayload);

  const { name, email, password } = registerPayload;

  if (!result.success) {
    return res.status(400).json(result.error);
  }

  const useExists = await User.findOne({
    $or: [{ name }, { email }],
  });
  try {
    if (useExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    await User.create({
      name: registerPayload.name,
      email: registerPayload.email,
      password: bcrypt.hashSync(registerPayload.password, 10),
    });
    res
      .status(201)
      .json({ message: "User created", user: registerPayload.name });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Login = async (req, res) => {
  const loginPayload = req.body;
  const result = LoginSchema.safeParse(loginPayload);
  if (!result.success) {
    return res.status(400).json(result.error);
  }
  try {
    const userExist = await User.findOne({ email: loginPayload.email });
    if (!userExist) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const passwordMatch = bcrypt.compareSync(
      loginPayload.password,
      userExist.password
    );
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: userExist._id, name: userExist.name },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    cookieParser()(req, res, () => {});
    res
      .cookie("token", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .json({ message: "Login successful", user: userExist.name, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Logout = (req, res) => {
  // Clear the token cookie by setting an expiry date in the past
  res
    .cookie("token", "", {
      expires: new Date(0),
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json({ message: "Logout successful" });

  // Respond with a success message
};

const Search = async (req, res) => {
  try {
    const searchQuery = req.query.q;
    console.log(searchQuery);
    if (!searchQuery) {
      return res.status(400).json({ message: "Search query is required" });
    }
    const users = await User.find({
      mmusername: { searchQuery },
    });
    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "an error occurred while searching user" });
  }
};

module.exports = { Register, Login, Logout, Search };
