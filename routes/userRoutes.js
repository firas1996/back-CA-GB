const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
} = require("../controllers/userController");
const Router = express.Router();

Router.post("/", createUser);
Router.get("/", getAllUsers);
Router.get("/:id", getUserById);

module.exports = Router;
