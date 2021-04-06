const User = require("../models/user");
const query = require("../utils/query");
const crudController = require("../utils/crud");
const AvatarService = require("../services/avatarService");
const avatars = new AvatarService();

const createOne = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!email || !password || !firstName || !lastName)
    return res.status(400).send({ message: "All fields are required" });

  try {
    const user = await query.findOne(User, { email });

    if (user) return res.status(400).send({ message: "Email already in use" });

    const newUser = await query.createOne(User, req.body);

    if (!newUser)
      return res.status(400).send({ message: "Failed to create new user" });

    const token = newUser.generateAuthToken();

    return res.status(201).send({ user: newUser, token });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

const addAvatar = async (req, res, next) => {
  try {
    const user = await query.getOne(User, req.params.id);

    if (!user) return res.status(400).send({ message: "User does not exist" });

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
      return res.status(400).send({ message: "Unable to save avatar" });

    return res.status(201).send(savedUser);
  } catch (err) {
    if (req.file && req.file.storedFilename) {
      await avatars.delete(req.file.storedFilename);
    }
    return res.status(500).send({ message: `Error: ${err}` });
  }
};

const removeAvatar = async (req, res, next) => {
  try {
    const user = await query.getOne(User, req.params.id);

    if (!user) return res.status(400).send({ message: "User does not exist" });

    if (user.avatar) {
      await avatars.delete(user.avatar);
      user.avatar = undefined;
    }

    const savedUser = await user.save();

    if (!savedUser)
      return res.status(400).send({ message: "Unable to save avatar" });

    return res.status(201).send(savedUser);
  } catch (err) {
    return res.status(500).send({ message: `Error: ${err}` });
  }
};

module.exports = {
  ...crudController(User),
  createOne,
  addAvatar,
  removeAvatar,
};
