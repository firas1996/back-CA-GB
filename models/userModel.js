const mongoose = require("mongoose");
const validator = require("validator");
// test

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required !!!"],
  },
  email: {
    type: String,
    required: [true, "The email is required !!!"],
    unique: [true, "This email is already used !!!"],
    validate: [validator.isEmail, "This email is not valid !!!"],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "The password is required !!!"],
    minlength: 6,
  },
  confirmPassword: {
    type: String,
    required: [true, "The password is required !!!"],
    minlength: 6,
    validate: {
      validator: function (cPass) {
        return cPass === this.password;
      },
      message: "password and cPass does not match !!!!",
    },
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  last_updated_password_date: {
    type: Date,
    default: Date.now(),
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
