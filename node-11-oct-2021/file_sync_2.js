const fs = require("fs")
const process = require("process")


let file = process.argv[2]
const data =  fs.readFileSync( file , "utf8" )

console.log(data);

