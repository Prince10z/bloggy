const fs = require("fs");
const { addblog } = require("../models/blogmodel");
async function creatingbloging(req, res) {
    return res.status(200).render('createBlog.ejs');
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
module.exports = {
    creatingbloging,
    addingBlog,
    showblogs
};