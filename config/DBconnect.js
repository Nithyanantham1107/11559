const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connect = await mongoose
      .connect(
        "mongodb://anandram1107:12345@ac-n45dnly-shard-00-00.diu9ryn.mongodb.net:27017,ac-n45dnly-shard-00-01.diu9ryn.mongodb.net:27017,ac-n45dnly-shard-00-02.diu9ryn.mongodb.net:27017/?ssl=true&replicaSet=atlas-41i7o6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(console.log("connected to Mongo"));
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
