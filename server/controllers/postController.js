const Post = require("../models/post");
const query = require("../utils/query");
const crudController = require("../utils/crud");

const createOne = async (req, res) => {
  try {
    const post = await Post.create({ ...req.body });

    if (!post) return res.status(401).send({ error: "Failed to create post." });

    const updatedPost = await Post.findById(post._id)
      .populate("userId")
      .lean()
      .exec();

    return res.status(201).send(updatedPost);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: `${err}` });
  }
};

const updateOne = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("userId");

    if (!post)
      return res.status(404).json({
        error: `Failed to update post.`,
      });
    res.status(200).send(post);
  } catch (err) {
    return res.status(500).send({ error: `${err}` });
  }
};

const removeOne = async (req, res, next) => {
  try {
    const deletedFriend = await query.removeOne(Friend, req.params.id);

    if (deletedFriend.length === 0) {
      return res.status(400).send({ message: "Unable to remove friend" });
    }
    return res.status(200).send({ message: "Friend has been removed" });
  } catch (err) {
    return res.status(500).send({ message: `Error: ${err}` });
  }
};

module.exports = { ...crudController(Post), createOne, updateOne, removeOne };
