const mongoose = require("mongoose");
require("colors");

const connectDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {});
    console.log(
      `Connected to DataBase: ${mongoose.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`Error in connectDataBase: ${error}`.red);
  }
};

module.exports = connectDataBase;
