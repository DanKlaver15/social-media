const User = require("../models/user");
const FriendRequest = require("../models/friendRequest");
const query = require("../utils/query");

const people = async (req, res) => {
  const { keywords } = req.params;
  const { userId } = req.body;
  const filter = { $regex: `.*${keywords}.*`, $options: "i" };
  try {
    const results = await User.find()
      .or([
        {
          firstName: filter,
        },
        { lastName: filter },
        { username: filter },
      ])
      .select({
        username: 1,
        firstName: 1,
        lastName: 1,
        avatar: 1,
        email: 1,
        bio: 1,
        friends: 1,
        online: 1,
      })
      .lean()
      .exec();

    // Can we add friend status?
    const user = await query.getOne(User, userId);

    if (!user) return res.status(400).send({ message: "User not found." });

    // Get all friend requests ?.
    const friendRequests = await FriendRequest.find({ accepted: true }).or([
      { senderId: user._id },
      { receiverId: user._id },
    ]);

    const resultsWithFriendStatus = results.map((result) => {
      if (result.friends.includes(user._id)) {
        result.friend = "yes";
      } else if (
        result.friends.includes(friendRequests.senderId) ||
        result.friends.includes(friendRequests.receiverId)
      ) {
        result.friend = "pending";
      } else {
        console.log(result.friends);
        result.friends = "no";
      }
      return result;
    });

    if (!results) return res.status(404).send({ message: "Users not found." });

    return res.status(200).send(resultsWithFriendStatus);
  } catch (err) {
    return res.status(500).send({ message: "Server error" });
    console.log(err);
  }
};

module.exports = {
  people,
};
