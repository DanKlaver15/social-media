const User = require("../models/user");
const Friend = require("../models/friend");
const query = require("../utils/query");
const mongoose = require("mongoose");
const crudController = require("../utils/crud");

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
    const acceptedFriends = await Friend.aggregate([
      {
        $match: {
          $or: [
            {
              senderId: mongoose.Types.ObjectId(id),
              accepted: true,
            },
            {
              receiverId: mongoose.Types.ObjectId(id),
              accepted: true,
            },
          ],
        },
      },
      {
        $project: {
          _id: 1,
          friendId: {
            $cond: {
              if: {
                $eq: ["$senderId", mongoose.Types.ObjectId(id)],
              },
              then: "$receiverId",
              else: "$senderId",
            },
          },
          userId: {
            $cond: {
              if: {
                $eq: ["$senderId", mongoose.Types.ObjectId(id)],
              },
              then: "$senderId",
              else: "$receiverId",
            },
          },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "friendId",
          foreignField: "_id",
          as: "friend",
        },
      },
      {
        $addFields: {
          friend: { $arrayElemAt: ["$friend", 0] },
        },
      },
      {
        $group: {
          _id: null,
          friends: {
            $push: {
              requestId: "$_id",
              _id: "$friend._id",
              accepted: "$accepted",
              date: "$date",
              online: "$friend.online",
              username: "$friend.username",
              firstName: "$friend.firstName",
              lastName: "$friend.lastName",
              email: "$friend.email",
              avatar: "$friend.avatar",
            },
          },
        },
      },
    ]);

    let friends = [];

    if (acceptedFriends.length === 0) {
      return res.status(200).send(friends);
    }

    return res.status(200).send(acceptedFriends[0].friends);
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
