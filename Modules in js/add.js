console.log("add.js is loading");
var printObj = require("./print.js");

module.exports = function add(x,y){
	printObj.print(x+y) ;
}