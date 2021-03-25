const mongoose = require("mongoose");
const { requestSchema } = require("./request");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, minlength: 3, trim: true },
  password: { type: String, required: true, minlength: 3, trim: true },
  email: {
    type: String,
    required: true,
    minlength: 5,
    trime: true,
    lowercase: true,
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

userSchema.pre("save", async function preSave(next) {
  const user = this;
  if (!user.isModified("password")) return next();

  try {
    const hash = await bcrypt.hash(user.password, 12);
    user.password = hash;
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.checkPassword = async function checkPassword(candidate) {
  return bcrypt.compare(candidate, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
