const mongoose = require("mongoose");



const drinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  time_add: {
    type: Date,
    default: Date.now,
  },
  time_update: {
    type: Date,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});
let Drink = mongoose.model("Drink", drinkSchema);

module.exports =  Drink;
