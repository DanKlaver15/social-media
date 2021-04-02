const multer = require("multer");
const AvatarService = require("../services/avatarService");
const path = require("path");
const avatars = new AvatarService();

const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
}).single("avatar");

const handleAvatar = () => async (req, res, next) => {
  if (!req.file) return next();

  if (req.file.mimetype !== "image/png" && req.file.mimetype !== "image/jpeg") {
    return res.status(400).send({ error: "File format is not supported." });
  }

  req.file.storedFilename = await avatars.store(req.file.buffer);
  return next();
};

module.exports = {
  upload,
  handleAvatar,
};
