const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");
const auth = require("../middlewares/auth");

router.route("/people/:keywords").post(auth, searchController.people);

module.exports = router;
