const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');



app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('__method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//fake comments

const comments = [
    { 
        id: uuid(),
        username: "jsojhua",
        comment: "This is a comment"
    },
    {
        id: uuid(),
        username: "UBEPUBVUVIUEbwvuiw",
        comment: "vodoINIDVWIVNIFBVI",
    },
    {
        id: uuid(),
        username: "DIVINE",
        comment: "This is a svcuvPWEBUVUVUWVBWE",
    },
    {
        id: uuid(),
        username: "stephen",
        comment: "memememememem comment",
    },
    {
        id: uuid(),
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
    comments.push({ username, comment, id: uuid() })
    res.redirect("/comments");
});

app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render("comments/edit", {comment})
})

app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect("/comments")
})

app.listen(3000, () => {
    console.log("listening on port 3000@@@!")
});



