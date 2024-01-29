const express = require("express");
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

  if (!result.success) {
    return res.status(400).json(result.error);
  }

  const useExists = await User.findOne({ email: registerPayload.email });
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
  const userExist = await User.findOne({ email: loginPayload.email });
  console.log(process.env.JWT_SECRET);
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
    { expiresIn: "7d" }
  );

  cookieParser()(req, res, () => {});
  res
    .cookie("token", token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days in milliseconds
      httpOnly: true,
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json({ message: "Login successful", user: userExist.name, token });
};

module.exports = { Register, Login };