const express = require("express");
const router = express.Router();
const Joi = require("joi");
const postController = require("../controllers/postController");

router.route("/").get(postController.getAll).post(postController.createOne);
router
  .route("/:id")
  .get(postController.getOne)
  .put(postController.updateOne)
  .delete(postController.removeOne);

router.route("/:id/feed").get(postController.getFeed);

module.exports = router;
