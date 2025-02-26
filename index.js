const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const app = express();
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
