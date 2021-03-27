const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true, minlength: 1 },
  date: { type: Date, default: Date.now },
  commenterId: { type: mongoose.Types.ObjectId },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
