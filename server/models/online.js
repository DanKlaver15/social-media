const mongoose = require("mongoose");

const onlineSchema = new mongoose.Schema({
  usersOnline: [mongoose.Types.ObjectId],
});

const usersOnline = mongoose.model("UsersOnline", onlineSchema);

module.exports = usersOnline;
