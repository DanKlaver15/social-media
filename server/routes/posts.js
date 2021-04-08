const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const auth = require("../middlewares/auth");

router
  .route("/")
  .get(auth, postController.getAll)
  .post(auth, postController.createOne);
router
  .route("/:id")
  .get(auth, postController.getOne)
  .put(auth, postController.updateOne)
  .delete(auth, postController.removeOne);

module.exports = router;
