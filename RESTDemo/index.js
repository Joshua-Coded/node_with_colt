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
        id: 1,
        username: "jsojhua",
        comment: "This is a comment"
    },
    {
        id: 2,
        username: "UBEPUBVUVIUEbwvuiw",
        comment: "vodoINIDVWIVNIFBVI",
    },
    {
        id: 3,
        username: "DIVINE",
        comment: "This is a svcuvPWEBUVUVUWVBWE",
    },
    {
        id: 4,
        username: "stephen",
        comment: "memememememem comment",
    },
    {
        id: 5,
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

app.get("/comments/:id", (req, res) => {
const { id } = req.params;
const comment = comments.find(c => c.id === parseInt(id))
res.render("comments/show", { comment })
})


app.listen(3000, () => {
    console.log("listening on port 3000@@@!")
});



