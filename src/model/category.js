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
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
