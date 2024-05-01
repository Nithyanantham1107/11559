const Company = require("../Model/Company");

const Createcompany = async (req, res) => {
  const {
    company,
    category,
    productName,
    price,
    rating,
    dicount,
    availability,
  } = req.body;
  try {
    const val = await Company.create({
      company,
      category,
      productName,
      price,
      rating,
      dicount,
      availability,
    });
    console.log(val);
  } catch (error) {
    console.log(error);
  }
};
const Showcompany = async (req, res) => {
  const { companyname, categoryname, top, minPrice, maxPrice } = req.params;
  console.log(companyname, minPrice, top);
};
module.exports = { Createcompany, Showcompany };
