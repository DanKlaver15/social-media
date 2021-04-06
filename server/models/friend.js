const mongoose = require("mongoose");

const friendSchema = new mongoose.Schema({
  senderId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  receiverId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  accepted: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
});

const Friend = mongoose.model("Friend", friendSchema);

module.exports = Friend;
