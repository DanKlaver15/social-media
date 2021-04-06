const FriendRequest = require("../models/friendRequest");
const mongoose = require("mongoose");
const User = require("../models/user");
const query = require("../utils/query");
const crudController = require("../utils/crud");

const requestFriend = async (req, res) => {
  const { senderId, receiverId } = req.params;

  try {
    const receiver = await query.getOne(User, receiverId);

    if (!receiver)
      return res.status(400).send({ message: "User doesn't exist" });

    const sender = await query.getOne(User, senderId);

    if (!sender) return res.status(400).send({ message: "User doesn't exist" });

    const request = await FriendRequest.create({
      senderId: sender._id,
      receiverId: receiver._id,
    });

    receiver.friendRequests.push(request._id);
    sender.friendRequests.push(request._id);

    await receiver.save();
    await sender.save();

    return res.status(200).send(request);
  } catch (err) {
    return res.status(500).send({ message: `${err}` });
  }
};

const accept = async (req, res) => {
  const { requestId } = req.params;

  try {
    const request = await FriendRequest.findById(requestId)
      .populate("senderId")
      .populate("receiverId");

    if (!request) return res.status(400).send({ error: "Request not found" });

    const receiver = await query.getOne(User, request.receiverId);

    if (!receiver) return res.status(400).send({ error: "User not found." });

    const sender = await query.getOne(User, request.senderId);

    if (!sender) return res.status(400).send({ error: "User not found." });

    request.accepted = true;

    receiver.friends.push(sender._id);
    sender.friends.push(receiver._id);

    let updatedRequest = await request.save();

    await receiver.save();
    await sender.save();

    return res.status(200).send(updatedRequest);
  } catch (err) {
    return res.status(500).send({ error: `Server Error: ${err}` });
  }
};

const getAll = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id)
      .populate({
        path: "friendRequests",
        populate: [{ path: "receiverId" }, { path: "senderId" }],
      })
      .exec();

    if (!user) return res.status(400).send({ message: "User not found." });

    return res.status(200).send(user.friendRequests);
  } catch (err) {
    return res.status(500).send({ message: `${err}` });
  }
};

module.exports = {
  ...crudController(FriendRequest),
  requestFriend,
  accept,
  getAll,
};
