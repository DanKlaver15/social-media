const Post = require("../models/post");
const User = require("../models/user");
const query = require("../utils/query");
const crudController = require("../utils/crud");

const getFeed = async (req, res) => {
  try {
    const feed = await Post.find({ userId: req.params.id })
      .sort({ date: -1 })
      .lean();

    if (!feed)
      return res.status(401).send({ error: "Error: User feed not found" });

    const userIds = feed.map((post) => post.userId);

    const postUsers = await User.find({
      _id: { $in: userIds },
    })
      .select({
        username: 1,
        email: 1,
        firstName: 1,
        lastName: 1,
        avatar: 1,
        online: 1,
      })
      .lean()
      .exec();

    const toReturn = feed.map((post) => {
      const match = postUsers.find(
        (user) => `${post.userId}` === `${user._id}`
      );

      if (match) {
        return { ...post, ...match };
      }

      return post;
    });

    return res.status(201).send(toReturn);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: `${err}` });
  }
};

module.exports = { ...crudController(Post), getFeed };
