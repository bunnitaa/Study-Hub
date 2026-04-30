const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("MONGODB_URI:", process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Database connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;