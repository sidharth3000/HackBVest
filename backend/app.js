const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const fileupload = require("express-fileupload");
dotenv.config();

const PORT = process.env.PORT || 9000;

const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use(fileupload());

const url = process.env.MONGODBURL;
app.get("/status", (req, res, next) => {
  res.send("UP!!");
});

mongoose.connect(url, () => {
  app.listen(PORT, () => {
    console.log(`Running at ${PORT}`);
  });
});
