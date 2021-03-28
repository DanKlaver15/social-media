const User = require("../models/user");
const query = require("../utils/query");

const getAll = async (req, res) => {
  try {
    const user = await query.getOne(User, req.params.id);

    if (!user) return res.status(401).send({ message: "Invalid user" });
    return res.status(200).send(user.friends);
  } catch (err) {
    return res.status(500).send({ message: `Server Error: ${err}` });
  }
};

module.exports = { getAll };
