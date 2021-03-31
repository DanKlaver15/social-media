const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  senderId: { type: mongoose.Types.ObjectId, required: true },
  receiverId: { type: mongoose.Types.ObjectId, required: true },
  accepted: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
});

const Request = mongoose.model("FriendRequest", requestSchema);

module.exports = Request;
