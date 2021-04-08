const Friend = require("../models/friend");
const crudController = require("../utils/crud");
const { getFriends } = require("../utils/friendRequests");

const getUserFriendRequests = async (req, res) => {
  const { id } = req.params;
  try {
    const friendRequests = await Friend.find({
      receiverId: id,
      accepted: false,
    })
      .populate("senderId")
      .exec();

    return res.status(200).send(friendRequests);
  } catch (err) {
    return res.status(500).send({ message: `${err}` });
  }
};

const getUserFriends = async (req, res) => {
  const { id } = req.params;

  try {
    const friends = await getFriends(id);

    return res.status(200).send(friends);
  } catch (err) {
    return res.status(500).send({ message: `${err}` });
  }
};

const updateOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Friend.findByIdAndUpdate(id, req.body, {
      new: true,
    }).populate("senderId");

    if (!result)
      return res.status(404).send({
        error: `The friend request with id '${id}' does not exist`,
      });

    res.status(200).send(result);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  ...crudController(Friend),
  getUserFriendRequests,
  getUserFriends,
  updateOne,
};
