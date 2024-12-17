const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://rajuerladinny:h29vzlQrKU86tFio@namstenode.d5rxh.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
