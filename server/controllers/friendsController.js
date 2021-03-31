const User = require("../models/user");
const query = require("../utils/query");

const getAll = async (req, res) => {
  try {
    const user = await query.getOne(User, req.params.id);

    if (!user) return res.status(401).send({ message: "Invalid user" });

    const friends = await User.find({
      _id: { $in: user.friends },
    }).select({
      username: 1,
      email: 1,
      firstName: 1,
      lastName: 1,
      avatar: 1,
      online: 1,
    });

    return res.status(200).send(friends);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: `Server Error: ${err}` });
  }
};

const deleteFriend = async (req, res) => {
  try {
    const user = await query.getOne(User, req.params.id);

    if (!user) return res.status(401).send({ message: "Invalid user" });

    const friend = await query.getOne(User, req.params.friendId);

    if (!friend) return res.status(401).send({ message: "Invalid friend" });

    user.friends = user.friends.filter((friendId) => friendId === friend._id);
    friend.friends = friend.friends.filter((friendId) => friendId === user._id);

    await user.save();
    await friend.save();

    return res.status(200).send({ message: "Friend deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: `Server Error: ${err}` });
  }
};

module.exports = { getAll, deleteFriend };
