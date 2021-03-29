const mongoose = require("mongoose");

const onlineSchema = new mongoose.Schema({
  usersOnline: [mongoose.Types.ObjectId],
});

const UsersOnline = mongoose.model("UsersOnline", onlineSchema);

module.exports = UsersOnline;
