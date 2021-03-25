const User = require("../models/user");
const crudController = require("../utils/crud");

module.exports = crudController(User);
