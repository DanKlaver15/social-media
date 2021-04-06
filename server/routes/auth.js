const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const auth = require("../middlewares/auth");

router.route("/login").post(authController.login);
router.route("/logout").post(authController.logout);
router.route("/").post(auth, authController.authorize);

module.exports = router;
