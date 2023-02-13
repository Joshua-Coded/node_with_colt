const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//fake comments

const comments = [
    {
        username: "jsojhua",
        comment: "This is a comment"
    },
    {
        username: "UBEPUBVUVIUEbwvuiw",
        comment: "vodoINIDVWIVNIFBVI",
    },
    {
        username: "DIVINE",
        comment: "This is a svcuvPWEBUVUVUWVBWE",
    },
    {
        username: "stephen",
        comment: "memememememem comment",
    },
    {
        username: "skyme",
        comment: "lolololo a comment",
    }
]

app.get("/comments", (req, res) => {
    res.render("comments/app", { comments });
})


app.get("/comments/new", (req, res) => {
    res.render("comments/new");
})


app.post("/comments/", (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment })
    res.redirect("/comments");
});


app.listen(3000, () => {
    console.log("listening on port 3000@@@!")
});



