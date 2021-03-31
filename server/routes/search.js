const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");
const auth = require("../middlewares/auth");

// router.route("/all/:keywords").get(searchController.all);
router.route("/people/:keywords").post(auth, searchController.people);
// router.route("/recipes/:keywords").get(searchController.recipes);
// router.route("/posts/:keywords").get(searchController.posts);

module.exports = router;
