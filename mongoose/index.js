const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose.connect("mongodb://localhost:27017/movieApp").
then(() => {
    console.log("connection opened!!!");
})
.catch(err => {
    console.log("OH NO ERROR!!!")
    console.log(err);
})


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String, 
});

const Movie = mongoose.model('Movie', movieSchema);

// const amadue = new Movie({title: "Joshua", year: 2023,  score: 4.5, rating: 'R'});

Movie.insertMany([
    {title: "Adamue", year: 2012, score: 4.2, rating: 'R'},
    {title: "Adamue", year: 2012, score: 4.2, rating: 'R'},
    {title: "call me in", year: 2010, score: 7.2, rating: 'PG'},
    {title: "take me there", year: 2012, score: 4.2, rating: 'R'},
    {title: "john wick", year: 2019, score: 9.5, rating: 'PG'},
    {title: "old adam", year: 2011, score: 6.2, rating: 'R'},
    {title: "Me and You", year: 2015, score: 7.2, rating: 'PG'},
    {title: "Ghost", year: 2022, score: 9.0, rating: 'PG'},
])
.then(d => {
    console.log("IT WORKED!!!!!!!!");
    console.log(d);
})
