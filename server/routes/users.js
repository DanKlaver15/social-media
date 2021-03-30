const express = require("express");
const router = express.Router();
const Joi = require("joi");
const userController = require("../controllers/userController");
const friendsController = require("../controllers/friendsController");
const onlineController = require("../controllers/onlineController");
const auth = require("../middlewares/auth");
const avatar = require("../middlewares/avatar");

router.route("/").get(userController.getAll).post(userController.createOne);
router.route("/login").post(userController.login);
router.route("/auth").post(auth, userController.authorize);
router.route("/online").get(onlineController.getAll); // add auth
router.route("/register").post(userController.register);

router
  .route("/:id")
  .get(userController.getOne)
  .put(auth, userController.updateOne)
  .delete(userController.removeOne);

router.route("/:id/friends").get(auth, friendsController.getAll);
router.get("/avatar/:filename", (req, res) => {
  res.type("png");
  return res.sendFile(avatar.filepath(req.params.filename));
});

router.post(
  "/:id/avatar",
  [avatar.upload.single("avatar"), avatar.handleAvatar()],
  userController.avatar
);

module.exports = router;
