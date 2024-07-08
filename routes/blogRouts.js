const express = require("express");
const route = express.Router();
const { creatingbloging,
    addingBlog,
    showblogs,
    validateBlog } = require("../controllers/blog_Controllers");
route.get("/createBlog", creatingbloging);
route.post("/addblog", validateBlog, addingBlog);
route.get("/showblogs", showblogs);
module.exports = route;