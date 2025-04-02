const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      message: "Success !!!!",
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !!!!",
      error: error.message,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Success !!!!",
      total: users.length,
      users,
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !!!!",
      error: error.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      message: "Success !!!!",
      user,
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !!!!",
      error: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      message: "Success !!!!",
      user,
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !!!!",
      error: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Success !!!!",
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !!!!",
      error: error.message,
    });
  }
};

exports.getUserByName = async (req, res) => {
  try {
    const user = await User.find({ name: req.params.name });
    res.status(200).json({
      message: "Success !!!!",
      user,
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !!!!",
      error: error.message,
    });
  }
};
