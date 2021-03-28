const express = require("express");
const router = express.Router();
const Joi = require("joi");
const userController = require("../controllers/userController");
const friendsController = require("../controllers/friendsController");
const auth = require("../middlewares/auth");

router.route("/").get(userController.getAll).post(userController.createOne);
router.route("/login").post(userController.login);
router.route("/auth").post(auth, userController.authorize);

router
  .route("/:id")
  .get(userController.getOne)
  .put(userController.updateOne)
  .delete(userController.removeOne);
router.route("/:id/friends").get(auth, friendsController.getAll);
module.exports = router;
