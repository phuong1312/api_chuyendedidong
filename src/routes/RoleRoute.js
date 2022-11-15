const roleController = require("../controllers/RoleController");

const router = require('express').Router();

//add role
router.post('/', roleController.addRole);


module.exports = router;