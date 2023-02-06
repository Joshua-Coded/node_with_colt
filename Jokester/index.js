const jokes = require("give-me-a-joke");
const color = require("colors");

jokes.getRandomDadJoke(function (joke) {

    console.log(joke.rainbow);
});


