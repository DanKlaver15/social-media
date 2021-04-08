const Post = require("../models/post");

const getFeed = async (ids) => {
  try {
    const feed = await Post.find({ userId: { $in: ids } })
      .sort({ date: -1 })
      .populate("userId")
      .lean()
      .exec();

    if (!feed) return [];

    return feed;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getFeed,
};
