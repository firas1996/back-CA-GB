const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
dotenv.config({ path: "./.env" });
const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);
const port = 5000;

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("DB connection secured !!!");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(port, () => {
  try {
    console.log("The server is running !!!!");
  } catch (error) {
    console.log("Error: " + error);
  }
});
