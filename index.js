const express = require("express");

const app = express();

const port = 5000;

app.listen(port, () => {
  try {
    console.log("The server is running !!!!");
  } catch (error) {
    console.log("Error: " + error);
  }
});
