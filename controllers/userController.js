const User = require("../models/userModel");

exports.createrUser = async (req, res) => {
  try {
    console.log(req.body);
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
