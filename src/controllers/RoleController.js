const Role = require("../models/Role");

const roleController = {
    //add role
    addRole: async (req, res) => {
        // console.log(req.body);
        //res.json(req.body);
        try {
            const newRole = new Role(req.body);
            const saveRole = await newRole.save();
            res.json(saveRole);
        } catch (err) {
            res.status(500).json(err);
        };
    },
};

module.exports = roleController;