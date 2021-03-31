const User = require("../models/user");
const query = require("../utils/query");
const Online = require("../models/online");

const getAll = async (req, res) => {
  try {
    const user = await query.getOne(User, req.params.id);

    if (!user) return res.status(401).send({ message: "Invalid user" });

    const friendsIds = user.friends.map((friend) => {
      return friend.senderId;
    });

    const onlineFriends = await Online.find({
      usersOnline: { $in: friendsIds },
    });

    const friends = user.friends.map((friend) => {
      if (onlineFriends.includes(friend.senderId)) {
        return { ...friend, online: true };
      } else {
        return { ...friend, online: false };
      }
    });

    return res.status(200).send(user.friends);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: `Server Error: ${err}` });
  }
};

module.exports = { getAll };
