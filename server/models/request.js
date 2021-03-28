const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  sender: {
    senderId: { type: mongoose.Types.ObjectId },
    username: { type: String, required: true },
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    avatar: { type: String },
  },
  accepted: { type: Boolean, default: false },
});

const Request = mongoose.model("Request", requestSchema);

module.exports = { requestSchema, Request };
