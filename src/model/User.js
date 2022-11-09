const mongoose = require('mongoose');
const Role = require("./Role");

const user = new mongoose.Schema({
    user_name: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true
    },
    full_name: {
        type: String,
        // required: true
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Role
    },
    time_create: {
        type: Date,
        // required: true
    },
    time_update: {
        type: Date,
        // required: true
    },
});

let User = mongoose.model("User", user);
module.exports =  User;