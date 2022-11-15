const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
require("dotenv").config({ path: __dirname + "/.env" });

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("common"));
app.use(cors());
app.use("./uploads", express.static(path.join(__dirname, "uploads")));
app.set("view engine", "ejs");

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "image/jpg" || file.mimetype === "image/png") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// var upload = multer({ storage: storage });

var dbConn = require("./src/config/config");
const upload = require("./src/config/cloudinary.config");

const userRoute = require("./src/routes/UserRoute");
const drinkRoute = require("./src/routes/drink");
const categoryRoute = require("./src/routes/category");

app.use("/api/add_user", userRoute);
app.use("/api", upload.single("file"), drinkRoute);
app.use("/api", categoryRoute);

mongoose.connection.once("open", () => {
  console.log("Connect mongodb");
  app.listen(port, () => {
    console.log("server api port " + port);
    setInterval(function () {
      console.log("server api port " + port);
    }, 300000);
  });
});

app.use(bodyParser.json({ limit: "50mb" }));
