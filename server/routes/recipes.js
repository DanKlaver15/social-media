const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const recipeController = require("../controllers/recipeController");

router.route("/").get(recipeController.getAll).post(recipeController.createOne);

router
  .route("/:id")
  .get(auth, recipeController.getOne)
  .post(auth, recipeController.createOne)
  .delete(auth, recipeController.removeOne)
  .put(auth, recipeController.updateOne);

module.exports = router;
