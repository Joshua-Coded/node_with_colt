const express = require("express");
const { errors } = require("jshint/src/messages");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/r/:subreddit", (req, res) => {
    const {subreddit} = req.params;
    res.render("subreddit", {subreddit});
})


app.get("/random", (req, res) => {
    const num  = Math.floor(Math.random() * 10 )  + 1;
    res.render("random", { num: num})
})

app.listen(4000, () => {
    console.log("port listening on port 4000!!");
})