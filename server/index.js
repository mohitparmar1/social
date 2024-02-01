const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/userRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(cors({ origin: "http://127.0.0.1:5173", credentials: true }));

app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Connected to MongoDB");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
