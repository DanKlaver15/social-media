const Post = require("../models/post");
const query = require("../utils/query");
const crudController = require("../utils/crud");

const getFeed = async (req, res) => {
  try {
    const feed = await Post.find({ userId: req.params.id }).sort({ date: -1 });

    if (!feed) return res.status(401).send({ message: "Feed unavailable" });

    return res.status(201).send(feed);
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

module.exports = { ...crudController(Post), getFeed };
