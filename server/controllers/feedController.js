const Post = require("../models/post");
const User = require("../models/user");
const query = require("../utils/query");
const crudController = require("../utils/crud");

const getFeed = async (req, res) => {
  try {
    const feed = await Post.find({ userId: req.params.id })
      .sort({ date: -1 })
      .populate("userId")
      .lean()
      .exec();

    if (!feed)
      return res.status(401).send({ error: "Error: User feed not found" });

    return res.status(201).send(feed);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: `${err}` });
  }
};

module.exports = { ...crudController(Post), getFeed };
