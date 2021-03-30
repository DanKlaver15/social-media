const Online = require("../models/online");
const query = require("../utils/query");

const online = () => async (req, res, next) => {
  const onlineUsers = await query.getAll(Online);
  const foundUser = onlineUsers.find((onlineUser) => onlineUser === res._id);

  if (!foundUser) {
    onlineUsers.push(user._id);

    try {
      onlineUsers.save();

      return next();
    } catch (err) {
      return res
        .status(400)
        .send({ message: "Unable to update online status" });
    }
  }
};

module.exports = online;
