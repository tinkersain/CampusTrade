require("dotenv").config();
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

async function dbConnect() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database Connected");
  } catch (error) {
    throw error;
  }
}

module.exports = dbConnect;
