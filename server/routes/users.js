const express = require("express");
const router = express.Router();
const Joi = require("joi");
const userController = require("../controllers/userController");

router.route("/").get(userController.getAll).post(userController.createOne);
router.route("/auth").post(userController.login);
router
  .route("/:id")
  .get(userController.getOne)
  .put(userController.updateOne)
  .delete(userController.removeOne);

module.exports = router;
