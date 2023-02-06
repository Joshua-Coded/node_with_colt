const express = require('express');
const app = express();


app.use(() => {
    console.log("we got a new request");
})



app.listen(4000, () => {
    console.log('listening on port 4000!!');
});
