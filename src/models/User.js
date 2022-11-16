const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const Role = require("./Role");

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        unique: true,
        trim: true,
        // required: true,
    },
    password: {
        type: String,
        trim: true,
        // required: true,
    },
    full_name: {
        type: String,
        unique: true,
        trim: true,
        // required: true,
    },
    phone: {
        type: String,
        unique: true,
        trim: true,
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        // required: true,
    },}, { timestamps: true });

userSchema.pre('save', async function(next) {
    let user = this;
    // console.log("begin hash password: ", user.password);
    if(!user.isModified('password')){
        return next();
    };
    user.password = await bcrypt.hash(user.password, 8);
    console.log("affter hash password: ", user.password);
    // bcrypt.hash(userSchema.password, 10, function(err,hash){
    //     if (err) {
    //         return next(err);
    //     } else {
    //         user.password = hash;
    //     }
    // });
});

let User = mongoose.model("User", userSchema);
module.exports =  User;