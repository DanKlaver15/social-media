const express = require("express");
const router = express.Router();
const Joi = require("joi");
const userController = require("../controllers/userController");
const friendsController = require("../controllers/friendsController");
const auth = require("../middlewares/auth");
const avatar = require("../middlewares/avatar");

router.route("/login").post(userController.login);
router.route("/logout").post(userController.logout);
router.route("/auth").post(auth, userController.authorize);
router.route("/register").post(userController.register);

router.route("/:id").put(auth, userController.updateOne);

router.route("/:id/friends").get(auth, friendsController.getAll);
router
  .route("/:id/friends/:friendId")
  .delete(auth, friendsController.deleteFriend);

router.get("/avatar/:filename", (req, res) => {
  res.type("png");
  return res.sendFile(avatar.filepath(req.params.filename));
});

router.post(
  "/:id/avatar",
  [auth, avatar.upload.single("avatar"), avatar.handleAvatar()],
  userController.avatar
);

module.exports = router;
