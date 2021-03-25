const mongoose = require("mongoose");

const replySchema = new mongoose.Schema({
  text: { type: String, required: true, minlength: 2, maxlength: 300 },
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Types.ObjectId },
});

const Reply = new mongoose.model("Reply", replySchema);

module.exports = { replySchema, Reply };
