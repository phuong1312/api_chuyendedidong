const mongoose = require('mongoose');
// const User = require('./User');
const role = new mongoose.Schema({
    role_name: {
        type: String,
        // required: true,
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }]
});

let Role = mongoose.model("Role", role);
module.exports = Role;