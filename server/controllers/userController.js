const User = require("../models/user");
const query = require("../utils/query");
const crudController = require("../utils/crud");
const friendController = require("./friendController");
const Friend = require("../models/friend");
const AvatarService = require("../services/avatarService");
const avatars = new AvatarService();
const { getFriendStatus } = require("../utils/friendRequests");

const createOne = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!email || !password || !firstName || !lastName)
    return res.status(400).send({ error: "All fields are required" });

  try {
    const user = await query.findOne(User, { email });

    if (user) return res.status(400).send({ error: "Email already in use" });

    const newUser = await query.createOne(User, req.body);

    if (!newUser)
      return res.status(400).send({ error: "Failed to create new user" });

    const token = newUser.generateAuthToken();

    return res.status(201).send({ user: newUser, token });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

const addAvatar = async (req, res, next) => {
  try {
    const user = await query.getOne(User, req.params.id);

    if (!user) return res.status(400).send({ error: "User does not exist" });

    if (req.file && req.file.storedFilename) {
      if (user.avatar) {
        try {
          await avatars.delete(user.avatar);
        } catch (err) {
          next(err);
        }
      }
      user.avatar = req.file.storedFilename;
    }

    const savedUser = await user.save();

    if (!savedUser)
      return res.status(400).send({ error: "Unable to save avatar" });

    return res.status(201).send(savedUser);
  } catch (err) {
    if (req.file && req.file.storedFilename) {
      await avatars.delete(req.file.storedFilename);
    }
    return res.status(500).send({ error: `Error: ${err}` });
  }
};

const removeAvatar = async (req, res, next) => {
  try {
    const user = await query.getOne(User, req.params.id);

    if (!user) return res.status(400).send({ error: "User does not exist" });

    if (user.avatar) {
      await avatars.delete(user.avatar);
      user.avatar = undefined;
    }

    const savedUser = await user.save();

    if (!savedUser)
      return res.status(400).send({ error: "Unable to save avatar" });

    return res.status(201).send(savedUser);
  } catch (err) {
    return res.status(500).send({ error: `Error: ${err}` });
  }
};

const removeOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedUser = await query.removeOne(User, id);
    const friendRequests = await Friend.remove().or([
      { senderId: id },
      { receiverId: id },
    ]);

    if (deletedUser.deletedCount === 0)
      return res.status(400).send({ error: "Unable to delete your account" });

    return res.status(200).send(deletedUser);
  } catch (err) {
    return res.status(500).send({ error: `Error: ${err}` });
  }
};

const getPerson = async (req, res) => {
  const { id, personId } = req.params;

  try {
    const person = await User.findById(personId)
      .select({
        bio: 1,
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

    if (!person) return res.status(404).send({ error: "Person not found." });

    const isFriend = await getFriendStatus(id, personId);

    return res.status(200).send({ ...person, isFriend });
  } catch (err) {}
};

module.exports = {
  ...crudController(User),
  createOne,
  addAvatar,
  removeAvatar,
  removeOne,
  getPerson,
};
