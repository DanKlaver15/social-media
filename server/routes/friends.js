const express = require("express");
const Joi = require("joi");
const friendController = require("../controllers/friendController");
const auth = require("../middlewares/auth");
const router = express.Router();

router.route("/").post(auth, friendController.createOne);

router
  .route("/:id")
  .put(auth, friendController.updateOne)
  .delete(auth, friendController.removeOne);

module.exports = router;
