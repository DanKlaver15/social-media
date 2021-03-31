const User = require("../models/user");
const query = require("../utils/query");

const people = async (req, res) => {
  const { keywords } = req.params;
  const filter = { $regex: `.*${keywords}.*`, $options: "i" };
  try {
    const results = await User.find()
      .or([
        {
          firstName: filter,
        },
        { lastName: filter },
        { username: filter },
      ])
      .select({
        username: 1,
        firstName: 1,
        lastName: 1,
        avatar: 1,
        email: 1,
        bio: 1,
      });

    if (!results) return res.status(404).send({ message: "Users not found." });

    return res.status(200).send(results);
  } catch (err) {
    return res.status(500).send({ message: "Server error" });
    console.log(err);
  }
};

module.exports = {
  people,
};