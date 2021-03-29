const UsersOnline = require("../models/online");
const crudController = require("../utils/crud");

module.exports = crudController(UsersOnline);
