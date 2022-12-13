const User = require("../models/User");
const Role = require("../models/Role");

const userController = {
  //add user
  addUser: async (req, res) => {
    // console.log(req.body);
    try {
      const newUser = new User(req.body);
      const saveUser = await newUser.save();
      if (req.body.role) {
        const updateRole = Role.findById(req.body.role);
        await updateRole.updateOne({ $push: { users: saveUser._id } });
        // console.log(req.body.role);
        // console.log(saveUser._id);
      }
      res.status(200).json(saveUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //get all user
  getAllUser: async (req, res) => {
    try {
      const getAllUser = await User.find().populate("role");
      res.status(200).json(getAllUser);
      //console.log(getAllUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //get user by id
  getUserById: async (req, res) => {
    try {
      const getUser = await User.findById(req.params.id);
      // await updateUser.updateOne({ $set: req.body });
      res.status(200).json(getUser);
      //console.log(getUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.updateMany(
        { users: req.params.id },
        { $pull: { users: req.params.id } }
      );
      const delUser = await User.findByIdAndDelete(req.params._id);
      res.status(200).json(delUser);
      //console.log(delUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateUserById: async (req, res) => {
    try {
      const allUser = await User.findByIdAndUpdate(req.params.id);
      res.status(200).json(allUser);
      //console.log(allUser);
      allUser.save();
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
