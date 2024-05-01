const express = require("express");

const connectDB = require("./config/DBconnect");
const dotenv = require("dotenv").config();
const app = express();
app.use(express.json());
connectDB();
app.use("/products/companies", require("./Routes/CompanyRoute"));

app.listen(process.env.PORT, () => {
  console.log(`hi im ${process.env.PORT}`);
});
