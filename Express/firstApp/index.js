const express = require('express');
const app = express();


app.use((req, res) => {
    console.log("we got a new request");
    res.send("hello world!!");
})


app.listen(4000, () => {
    console.log('listening on port 4000!!');
});
