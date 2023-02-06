const express = require('express');
const app = express();


// app.use((req, res) => {
    // console.log("we got a new request");
//     res.send("hello world!!");
// })

app.get('/', (req, res) => {
    res.send("<h1>Welcome to our pets home</h1>")
})

app.post('/cats', (req, res) => { 
    res.send("<h1>POST REQUEST TO CATS ROUTE");
 })

app.get('/cats', (req, res) => {
res.send("<h1>meow</h1>");
})

app.get('/dogs', (req, res) => {
res.send("<h1>woof</h1>");
})

app.get("*", (req, res) => {
    res.send("<h1>I don't know that path! <h1>");
})
app.listen(4000, () => {
    console.log('listening on port 4000!!');
});
