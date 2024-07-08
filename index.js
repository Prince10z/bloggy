const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
app.use(express.urlencoded({ extended: false }));
const port = 8081;
const route = require("./routes/blogRouts");
app.set("view engine", 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use("/", route);

app.listen(port, () => { console.log("starting server......") });