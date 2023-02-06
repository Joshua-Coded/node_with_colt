const figlet = require("figlet");
const color = require("colors");
figlet("Joshua Alana!!", function(err, data) {
    if(err){
	console.log("something went wrong......");
	console.dir(err);
	return;
    }
    console.log(data.rainbow)
});
