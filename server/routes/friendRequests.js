const express = require("express");
const Joi = require("joi");
const friendRequestController = require("../controllers/friendRequestController");
const auth = require("../middlewares/auth");
const router = express.Router();

router
  .route("/:senderId/:receiverId")
  .post(friendRequestController.requestFriend);
router
  .route("/accept/:receiverId/:requestId")
  .put(friendRequestController.accept);

router
  .route("/:id")
  .get(friendRequestController.getAll)
  .delete(friendRequestController.removeOne);

module.exports = router;
