const Drink = require("../model/drink");
const Category = require("../model/category");

const drinkController = {
  //add user
  addDrink: async (req, res) => {
    console.log(req.body);
    // res.status(200).json(req.body);
    try {
      const newDrink = new Drink(req.body);
      const saveDrink = await newDrink.save();
      // if (req.body.category) {
      //   const category = Category.find(req.body.category);
      //   await category.updateOne({
      //     $push: {
      //       drinks: saveDrink._id,
      //     },
      //   });
      // }
      res.status(200).json({
        success: true,
        message: "add successful drinks",
        data: saveDrink,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        data: err,
      });
    }
  },

  getAllDrink: async (req, res) => {
    try {
      const drinks = await Drink.find().populate("category");
      res.status(200).json({
        success: true,
        message: "read successful drinks",
        data: drinks,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        data: error,
      });
    }
  },

  getDrinkById: async (req, res) => {
    try {
      const drink = await Drink.findById(req.params.id).populate("category");
      res.status(200).json({
        success: true,
        message: "read successful drink",
        data: drink,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        data: error,
      });
    }
  },

  updateDrink: async (req, res) => {
    try {
      const drink = await Drink.findById(req.params.id);
      await drink.updateOne({ $set: req.body, time_update: Date.now() });
      res.status(200).json({
        success: true,
        message: "update successful drink",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        data: error,
      });
    }
  },
  deleteDrink: async (req, res) => {
    try {
      await Drink.findByIdAndDelete(req.params.id);
      res.status(200).json({
        success: true,
        message: "deleted successful drink",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        data: error,
      });
    }
  },
};

module.exports = drinkController;
