const express = require("express");
const router = express.Router();
const Joi = require("joi");

router.get("/", async (req, res) => {
  return res.status(200).end();
});

module.exports = router;
