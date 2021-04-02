const User = require("../models/user");
const query = require("../utils/query");
const crudController = require("../utils/crud");
const AvatarService = require("../services/avatarService");
const avatars = new AvatarService();

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).send({ message: "Email or password required" });

  try {
    const user = await query.findOne(User, { email });

    if (!user)
      return res.status(401).send({ message: "Invalid email or password" });

    const match = await user.checkPassword(password);

    if (!match)
      return res.status(401).send({ message: "Invalid email or password" });

    user.online = true;

    const updatedUser = await query.updateOne(User, user);

    const token = user.generateAuthToken();

    return res.status(201).send({ user: updatedUser, token });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

const logout = async (req, res) => {
  try {
    const user = await query.getOne(User, req.body.userId);

    if (!user) return res.status(401).send({ message: "User does not exist." });

    user.online = false;
    const updatedUser = await query.updateOne(User, user._id);

    return res.status(200).end();
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err });
  }
};

const register = async (req, res) => {
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

const authorize = async (req, res) => {
  if (!req.body._id) return res.status(400).send({ message: "Id is required" });

  try {
    const user = await query.getOne(User, req.body._id);

    if (!user) return res.status(401).send({ message: "Not authorized" });

    return res.status(201).send({ user });
  } catch (err) {
    return res.status(500).send({ message: `Server error: ${err}` });
  }
};

const avatar = async (req, res, next) => {
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

module.exports = {
  ...crudController(User),
  login,
  logout,
  authorize,
  register,
  avatar,
};
