const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config({ path: __dirname + "/.env" });

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("common"));
var dbConn = require("./src/config/config");

const userRoute = require("./src/routes/UserRoute");
const drinkRoute = require("./src/routes/drink");
const categoryRoute = require("./src/routes/category");

app.use("/api/add_user", userRoute);
app.use("/api", drinkRoute);
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
