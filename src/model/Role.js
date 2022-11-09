const mongoose = require('mongoose');

const role = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

let Role = mongoose.model("Role", role);
module.exports = Role;