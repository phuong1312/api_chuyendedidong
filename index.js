require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
app.use(cors());
// app.use(morgan("common"));
// app.use("./uploads", express.static(path.join(__dirname, "uploads")));
// app.set("viewengine", "ejs");

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

// var dbConn = require("./src/config/config");
// const upload = require("./src/config/cloudinary.config");

const userRoute = require("./src/routes/user");
// const drinkRoute = require("./src/routes/drink");
// const categoryRoute = require("./src/routes/category");
// const roleRoute = require("./src/routes/role");
// const areaRoute = require("./src/routes/area");
// const tableRoute = require("./src/routes/table");
// const drinkOrderRoute = require("./src/routes/drinkOrder");
// const orderRoute = require("./src/routes/order");
// const authorization = require('./src/config/authtokenrequired');

app.use("/api/user", userRoute);
// app.use("/api/role", roleRoute);
// app.use("/api", drinkRoute);
// app.use("/api", categoryRoute);
// app.use("/api", areaRoute);
// app.use("/api", tableRoute);
// app.use("/api", drinkOrderRoute);
// app.use("/api", orderRoute);

mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
    console.log("Connected with Mongo");
  });
mongoose.connection.on("error", (err) => {
  console.log("Has an error when connect with Mongo", err);
});


// app.use(bodyParser.json({limit: "50mb"}));
// app.get('/api', (req, res) => {
//     res.status(200).json("ok");
// });
// app.get('/', authorization, (req, res) => {
//     console.log(req.user);
//     return res.status(200).json(req.user);
// });
app.get('/',  (req, res) => {
    return res.send({"message": "ok"});
});
// const home = require("./src/routes/home");
// app.use("/home",home);


app.listen(port, () => {
  console.log("server api port " + port);
  setInterval(function () {
    console.log("server api port " + port);
  }, 300000);
});