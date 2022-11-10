const User = require("../model/User");

const userController = {
  //add user
  addUser: async (req, res) => {
    // console.log(req.body);
    //  await    res.status(200).json(req.body);
    try {
      const newUser = new User(req.body);
      const saveUser = await newUser.save();
      res.status(200).json(saveUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
