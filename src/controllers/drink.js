const Drink = require("../models/drink");
const Category = require("../models/category");
const fs = require("fs");

const drinkController = {
  //add user
  addDrink: async (req, res) => {
    // console.log({
    //   name: req.body.name,
    //   price: req.body.price,
    //   image: req.file,
    //   category: req.body.category,
    // });
    // res.status(200).json(req.body);
    try {
      const newDrink = new Drink({
        name: req.body.name,
        price: req.body.price,
        image: req.file.path,
        category: req.body.category,
      });
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
        data: {
          name: req.body.name,
          price: req.body.price,
          image: req.file.path,
          category: req.body.category,
        },
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
      const drinks = await Drink.find();
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
      const drink = await Drink.findById(req.params.id);
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

  getDrinkByCategoryId: async (req, res) => {
    try {
      //const category = await Category.findById(req.params.id);
      const drink = await Drink.find({ category: req.params.id });
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
      await drink.updateOne({
        $set: {
          name: req.body.name,
          price: req.body.price,
          image: req.file.path,
          category: req.body.category,
        },
      });
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
