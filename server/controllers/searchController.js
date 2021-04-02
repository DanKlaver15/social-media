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

    const user = await query.getOne(User, userId);

    if (!user) return res.status(400).send({ message: "User not found." });

    const friendRequests = await FriendRequest.find()
      .or([{ senderId: user._id }, { receiverId: user._id }])
      .lean()
      .exec();

    const requestIds = friendRequests.reduce((accumulator, request) => {
      return [...accumulator, `${request.senderId}`, `${request.receiverId}`];
    }, []);

    const resultsWithFriendStatus = results.map((result) => {
      if (result.friends.includes(`${user._id}`)) {
        result.friends = "yes";
      } else if (requestIds.includes(`${result._id}`)) {
        result.friends = "pending";
      } else {
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
