const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log("aaaaaaaaaa");
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

module.exports = router;