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

module.exports = { ...crudController(Post), createOne };
