const User = require("../models/User");
const Role = require("../models/Role");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userController = {
    //add user
    addUser: async (req, res) => {
        // console.log(req.body);
        try {
            const {user_name, password, full_name, phone, role} = req.body;
            if (!user_name || !password || !full_name || !phone) {
                res.status(500).json("please fill all the fields!");
            } else {
                const newUser = new User(req.body);
                const saveUser = await newUser.save();
                const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET);
                // res.send(token);
                if (req.body.role) {
                    const updateRole = Role.findById(req.body.role);
                    await updateRole.updateOne({ $push: { users: saveUser._id } });
                    // console.log("ok role");
                };
                res.status(200).send(saveUser);
            }
        } catch (err) {
            res.status(500).json(err);
        };
    },
    //get all user
    getAllUser: async (req, res) => {
        try {
            const getAllUser = await User.find();
            res.status(200).json(getAllUser);
            // console.log(getAllUser);
        } catch (err) {
            res.status(500).json(err);
        };
    },
    //get user by id
    getUserById: async (req, res) => {
        try {
            const getUser = await User.findById(req.params.id);
            // await updateUser.updateOne({ $set: req.body });
            res.status(200).send(getUser);
            // console.log(getUser);
        } catch (err) {
            res.status(500).json(err);
        };
    },
    //delete user by id
    deleteUser: async (req, res) => {
        try {
            // await Role.updateMany({ users: req.params.id }, { $pull: { users: req.params.id } });
            const deleteUser = await User.findByIdAndDelete(req.params.id);
            if(deleteUser){
                await Role.updateMany({ users: req.params.id }, { $pull: { users: req.params.id } });
                // res.send("Delete Users is Success!");
            };
            res.status(200).send("Delete User is Success!");
        } catch (err) {
            res.status(500).json(err);
        };
    },
    //update user by id
    updateUserById: async (req, res) => {
        try {
            // console.log(req.params.id);
            const allUser = await User.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).send("Update User is Success!");
            // console.log(allUser);
        } catch (err) {
            res.status(500).json(err);
        };
    },
    //login user
    login: async (req, res) => {
        const {user_name, password} = req.body;
        if (!user_name || !password) {
            res.status(402).json({ error: "please fill in the username or password" });
        };
        // console.log({user_name: user_name});
        const saveUser = await User.findOne({user_name: user_name});
        // console.log(saveUser);
        if (!saveUser) {
            res.status(402).json({error: "invalid credentials" });
        }
        try {
            bcrypt.compare(password, saveUser.password, (err, result) => {
                if (result) {
                    console.log("password matched");
                    const token = jwt.sign({_id: saveUser._id}, process.env.JWT_SECRET);
                    res.status(200).json({ token });
                } else {
                    console.log("password does not match");
                    res.status(402).json({error: "invalid credentials" });
                }
            });
        } catch (error) {
            res.status(402).json(error);
        }
    },
};

module.exports = userController;