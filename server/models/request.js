const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  senderId: { type: mongoose.Types.ObjectId },
  accepted: { type: Boolean, default: false },
});

const Request = mongoose.model("Request", requestSchema);

module.exports = { requestSchema, Request };
