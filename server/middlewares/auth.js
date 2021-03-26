const jwt = require("jsonwebtoken");
const config = require("config");

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  if (!token)
    return res
      .status(401)
      .send({ message: "Access denied. No token provided" });

  try {
    const decoded = jwt.verify(token, config.get("authsecret"));

    req.user = decoded;

    return next();
  } catch (err) {
    console.error(err);
    return res.status(400).send({ message: "Invalid token." });
  }
}

module.exports = auth;
