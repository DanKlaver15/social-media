const express = require("express");
const router = express.Router();
const Joi = require("joi");
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");
const avatar = require("../middlewares/avatar");

router.route("/").get(userController.getAll).post(userController.createOne);
router.route("/login").post(userController.login);
router.route("/auth").post(auth, userController.authorize);
router.route("/register").post(userController.register);

router
  .route("/:id")
  .get(userController.getOne)
  .put(userController.updateOne)
  .delete(userController.removeOne);

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
