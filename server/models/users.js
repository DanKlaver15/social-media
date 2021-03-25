const mongoose = require("mongoose");
const { requestSchema } = require("./request");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, minlength: 3, trim: true },
  password: { type: String, required: true, minlength: 8, trim: true },
  email: {
    type: String,
    required: true,
    minlength: 5,
    trime: true,
    lowercase: true,
  },
  avatar: { type: String },
  bgImage: { type: String },
  bio: { type: String, minlength: 5, trim: true },
  friends: [requestSchema],
  theme: { type: String, default: "light" },
  online: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
