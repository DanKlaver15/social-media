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

    // TODO: Add check password.

    const token = user.generateAuthToken();
    return res.status(201).send({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err });
  }
};

module.exports = { ...crudController(User), login };
