const User = require("../models/user");
const query = require("../utils/query");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).send({ error: "Email or password required" });

  try {
    const user = await query.findOne(User, { email });

    if (!user)
      return res.status(401).send({ error: "Invalid email or password" });

    const match = await user.checkPassword(password);

    if (!match)
      return res.status(401).send({ error: "Invalid email or password" });

    user.online = true;

    const updatedUser = await query.updateOne(User, user);

    const token = user.generateAuthToken();

    return res.status(201).send({ user: updatedUser, token });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

const logout = async (req, res) => {
  try {
    const user = await query.getOne(User, req.body.userId);

    if (!user) return res.status(401).send({ error: "User does not exist." });

    user.online = false;
    const updatedUser = await query.updateOne(User, user._id);

    return res.status(200).end();
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err });
  }
};

const authorize = async (req, res) => {
  if (!req.body._id) return res.status(400).send({ error: "Id is required" });

  try {
    const user = await query.getOne(User, req.body._id);

    if (!user) return res.status(401).send({ error: "Not authorized" });

    return res.status(201).send({ user });
  } catch (err) {
    return res.status(500).send({ error: `Server error: ${err}` });
  }
};

module.exports = {
  login,
  logout,
  authorize,
};
