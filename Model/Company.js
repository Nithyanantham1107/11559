const mongoose = require("mongoose");
const companyshema = mongoose.Schema(
  {
    company: {
      type: String,
    },
    category: {
      type: String,
    },
    productName: {
      type: String,
    },
    price: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    dicount: {
      type: Number,
    },
    availability: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Company", companyshema);
