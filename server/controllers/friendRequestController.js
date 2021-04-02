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

    return res.status(200).send(request);
  } catch (err) {
    return res.status(500).send({ message: `${err}` });
  }
};

const accept = async (req, res) => {
  const { receiverId, requestId } = req.params;

  try {
    const receiver = await query.getOne(User, receiverId);
    if (!receiver) return res.status(400).send({ message: "User not found." });

    const request = await query.getOne(FriendRequest, requestId);

    if (!request) return res.status(400).send({ message: "Request not found" });

    const sender = await query.getOne(User, request.senderId);

    if (!sender) return res.status(400).send({ message: "User not found." });

    request.accepted = true;

    // TODO: Can't have duplicates
    receiver.friends.push(sender._id);
    sender.friends.push(receiver._id);

    await request.save();
    await receiver.save();
    await sender.save();

    return res.status(200).send({ message: "Friend added." });
  } catch (err) {
    return res.status(500).send({ message: `${err}` });
  }
};

const getAll = async (req, res) => {
  const { id } = req.params;

  try {
    const requests = await FriendRequest.find({
      receiverId: mongoose.Types.ObjectId(id),
    })
      .sort({
        date: -1,
      })
      .lean()
      .exec();

    if (!requests)
      return res.status(400).send({ message: "No requests found." });

    const senderIds = requests.map((request) => request.senderId);

    // TODO: Refactor this query. It is used elsewhere.
    const senders = await User.find({
      _id: { $in: senderIds },
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

    const toReturn = senders.map((sender) => {
      const match = requests.find(
        (request) => `${request.senderId}` == `${sender._id}`
      );
      if (!match) {
        return sender;
      }
      return {
        ...sender,
        _id: match._id,
        accepted: match.accepted,
        requestDate: match.date,
      };
    });

    return res.status(200).send(toReturn);
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
