const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  signUp,
  signin,
} = require("../controllers/userController");
const Router = express.Router();

Router.post("/signup", signUp);
Router.post("/signin", signin);
Router.post("/", createUser);
Router.get("/", getAllUsers);
Router.get("/:id", getUserById);
Router.patch("/:id", updateUser);
Router.delete("/:id", deleteUser);

module.exports = Router;
