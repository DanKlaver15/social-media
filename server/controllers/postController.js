const Post = require("../models/post");
const crudController = require("../utils/crud");

module.exports = crudController(Post);
