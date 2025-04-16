const User = require("../models/userModel");

exports.signUp = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const newUser = await User.create({ ...req.body, role: "user" });
    // const newUser = await User.create({
    //   name,
    //   email,
    //   password,
    //   confirmPassword,
    // });
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

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        message: "email and password are required !!!!",
      });
    }
    const user = await User.findOne({ email });
    if (!user || user.password != password) {
      res.status(400).json({
        message: "email or password are inc !!!!",
      });
    }
    res.status(200).json({
      message: "Logged IN !!!!",
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !!!!",
      error: error.message,
    });
  }
};

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
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
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

// exports.getUserByName = async (req, res) => {
//   try {
//     const user = await User.find({ name: req.params.name });
//     res.status(200).json({
//       message: "Success !!!!",
//       user,
//     });
//   } catch (error) {
//     res.status(400).json({
//       message: "Fail !!!!",
//       error: error.message,
//     });
//   }
// };
