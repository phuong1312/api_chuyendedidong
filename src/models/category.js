const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // time_add: {
    //   type: Date,
    //   default: Date.now,
    // },
    // time_update: {
    //   type: Date,
    // },
    // drinks: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Drink",
    //   },
    // ],
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
