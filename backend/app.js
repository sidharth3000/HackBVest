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

app.use("/user", require("./routes/route.user"));
app.use("/admin", require("./routes/route.admin"));
app.use("/hospital", require("./routes/route.hospital"));

mongoose.connect(url, () => {
  app.listen(PORT, () => {
    console.log(`Running at ${PORT}`);
  });
});
