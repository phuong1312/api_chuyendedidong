const userController = require("../controller/UserController");

const router = require('express').Router();

//add user
router.post('/', userController.addUser);

module.exports = router;