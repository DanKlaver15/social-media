const User = require("../models/user");
const query = require("../utils/query");
const crudController = require("../utils/crud");

const login = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ message: "need email and password" });
  }

  try {
    const user = await query.findOne(User, { email: req.body.email });

    if (!user)
      return res.status(401).send({ message: "Invalid email or password" });

    const match = await user.checkPassword(req.body.password);

    if (!match)
      return res.status(401).send({ message: "Invalid email or password" });

    const token = user.generateAuthToken();

    return res.status(201).send({ _id: user._id, token });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: err });
  }
};

const authorize = async (req, res) => {
  if (!req.body._id) return res.status(400).send({ message: "Id is required" });

  try {
    const user = await query.getOne(User, req.body._id);

    if (!user) return res.status(401).send({ message: "Not authorized" });

    return res.status(201).send({ message: "authorized" });
  } catch (err) {
    return res.status(500).send({ message: `Server error: ${err}` });
  }
};

module.exports = { ...crudController(User), login, authorize };
