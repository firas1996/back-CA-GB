const express = require("express");
const { createrUser } = require("../controllers/userController");
const Router = express.Router();

Router.post("/", createrUser);

module.exports = Router;
