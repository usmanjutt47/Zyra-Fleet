const express = require("express");
const cors = require("cors");
const connectDataBase = require("./config/DataBase");
const userRoutes = require("./routes/userRoutes"); 
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDataBase()

app.use("/api/users", userRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.green);
});
