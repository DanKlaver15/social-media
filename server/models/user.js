const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
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
  friends: [mongoose.Types.ObjectId],
  darkMode: { type: Boolean, default: false },
  online: { type: Boolean, default: false },
  lastOnline: { type: Date, default: Date.now },
  registered: { type: Date, default: Date.now },
});

userSchema.pre("save", async function preSave(next) {
  if (!this.isModified("password")) return next();

  try {
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, email: this.email },
    config.get("authsecret")
  );
};

userSchema.methods.checkPassword = async function checkPassword(candidate) {
  return bcrypt.compare(candidate, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
