const mongoose = require("mongoose");

const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://sajood415:Sd12345@cluster0.mmlsl0o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
