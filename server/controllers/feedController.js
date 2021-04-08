const Post = require("../models/post");
const User = require("../models/user");
const { getFriends } = require("../utils/friendRequests");

const crudController = require("../utils/crud");

const getFeed = async (req, res) => {
  const { id } = req.params;
  try {
    let friends = await getFriends(id);

    friends = friends.map((friend) => friend._id);

    const feed = await Post.find()
      .or([{ userId: id }, { userId: { $in: friends } }])
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
