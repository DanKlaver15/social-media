const mongoose = require("mongoose");
const { replySchema } = require("./Reply");

const postSchema = new mongoose.Schema({
  content: { type: String, minlength: 1 },
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Types.ObjectId },
  likes: { type: Number, default: 0 },
  replies: [replySchema],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
