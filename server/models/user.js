const mongoose = require("mongoose");
const { requestSchema } = require("./request");
const jwt = require("jsonwebtoken");
const config = require("config");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
    unique: true,
  },
  password: { type: String, required: true, minlength: 3, trim: true },
  email: {
    type: String,
    required: true,
    minlength: 5,
    trim: true,
    lowercase: true,
    unique: true,
  },
  firstName: { type: String, required: true, minlength: 1, trim: true },
  lastName: { type: String, required: true, minlength: 1, trim: true },
  avatar: { type: String },
  bgImage: { type: String },
  bio: { type: String, minlength: 5, trim: true },
  friends: [requestSchema],
  theme: { type: String, default: "light" },
  online: { type: Boolean, default: false },
  registered: { type: Date, default: Date.now },
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, email: this.email },
    config.get("authsecret")
  );
};

const User = mongoose.model("User", userSchema);

module.exports = User;
