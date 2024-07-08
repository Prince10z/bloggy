const fs = require("fs");
const { addblog } = require("../models/blogmodel");
const { error } = require("console");
async function creatingbloging(req, res) {
    return res.status(200).render('createBlog.ejs', { errors: [] });
}
async function addingBlog(req, res) {
    const body = req.body;
    addblog(body.title, body.description, body.imageUrl)
    console.log("Added blog Done.....");
    return res.redirect("/showblogs");
}
function showblogs(req, res) {
    fs.readFile("./public/data/blogs.json", "utf8", (err, data) => {
        let blogdata = [];
        if (data) {
            console.log(data);

            datablog = JSON.parse(data);

            console.log(datablog);
            return res.render("showBlogs.ejs", { blogs: datablog });
        } else {
            return res.render("showBlogs.ejs", { blogs: blogdata });
        }


    })


}
function validateBlog(req, res, next) {
    const { title, description, imageUrl } = req.body;
    let errors = [];

    if (!title || title.length < 3) {
        errors.push("Title field should contain at least 3 characters");
    }
    if (!description || description.length < 10) {
        errors.push("Blog description should contain at least 10 characters");
    }

    if (errors.length > 0) {
        // Render the createBlog.ejs template with errors
        return res.status(400).render("createBlog.ejs", { errors: errors });
    } else {
        next(); // Proceed to the next middleware or route handler
    }
}
module.exports = {
    creatingbloging,
    addingBlog,
    showblogs,
    validateBlog
};