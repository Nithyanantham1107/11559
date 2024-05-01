const express = require("express");
const {
  Createcompany,
  Showcompany,
} = require("../controller/CompanyController");
const router = express.Router();
router.post("/add", Createcompany);
router.get(
  "/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q",
  Showcompany
);
module.exports = router;
