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
  const { companyname, categoryname } = req.params;
  const { top, minPrice, maxPrice } = req.query;
  try {
    if (companyname && categoryname) {
      if (top) {
        if (minPrice && maxPrice) {
          const data = await Company.find({
            company: companyname,
            category: categoryname,
            price: { $gte: minPrice, $lte: maxPrice },
          }).limit(top);
          res.json(data);
        } else {
          const data = await Company.find({
            company: companyname,
            category: categoryname,
          }).limit(top);
          res.json(data);
        }
      } else {
        const data = await Company.find({
          company: companyname,
          category: categoryname,
        });
        res.json(data);
      }
      console.log(data);
    }
  } catch (error) {}
};
module.exports = { Createcompany, Showcompany };
