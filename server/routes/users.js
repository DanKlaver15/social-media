const express = require("express");
const router = express.Router();
const Joi = require("joi");
const userController = require("../controllers/userController");
const friendsController = require("../controllers/friendsController");
const feedController = require("../controllers/feedController");
const auth = require("../middlewares/auth");
const { validateUser } = require("../middlewares/validate");
const avatar = require("../middlewares/avatar");

router.route("/").post(validateUser, userController.createOne);
router.route("/:id").put(auth, userController.updateOne);

router.route("/:id/friends").get(auth, friendsController.getAll);
router
  .route("/:id/friends/:friendId")
  .delete(auth, friendsController.deleteFriend);

router.get("/avatar/:filename", (req, res) => {
  res.type("png");
  return res.sendFile(avatar.filepath(req.params.filename));
});

router
  .route("/:id/avatar")
  .post([auth, avatar.upload, avatar.handleAvatar()], userController.addAvatar)
  .delete(auth, userController.removeAvatar);

router.route("/:id/feed").get(feedController.getFeed);

module.exports = router;
