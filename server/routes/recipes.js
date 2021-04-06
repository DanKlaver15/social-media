const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const recipeController = require("../controllers/recipeController");

router.route("/").get(recipeController.getAll).post(recipeController.createOne);

router
  .route("/:id")
  .get(recipeController.getAll)
  .post(recipeController.createOne)
  .delete(recipeController.removeOne)
  .put(recipeController.updateOne);

module.exports = router;
