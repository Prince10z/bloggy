const express = require("express");
const route = express.Router();
const { creatingbloging, addingBlog, showblogs } = require("../controllers/blog_Controllers");
route.get("/createBlog", creatingbloging);
route.post("/addblog", addingBlog);
route.get("/showblogs", showblogs);
module.exports = route;