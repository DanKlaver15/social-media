const Friend = require("../models/friend");
const mongoose = require("mongoose");

const getFriends = async (id) => {
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

    if (acceptedFriends.length === 0) {
      return [];
    }

    return await acceptedFriends[0].friends;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getFriends,
};
