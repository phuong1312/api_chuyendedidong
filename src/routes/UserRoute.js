const userController = require("../controllers/UserController");

const router = require('express').Router();

//add user
router.post('/add', userController.addUser);
//get all user
router.get('/all', userController.getAllUser);
//get one user by id
router.get('/getbyid/:id', userController.getUserById);
//delete user by id
router.post('/delete/:id', userController.deleteUser);
//update user
router.put('/update/:id', userController.updateUserById);
module.exports = router;