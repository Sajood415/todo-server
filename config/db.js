const mongoose = require("mongoose");
require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL || "ADD URL HERE";

const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
};

module.exports = connectDB;
