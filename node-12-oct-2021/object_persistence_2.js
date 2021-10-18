const fs = require("fs")

const booksData = fs.readFileSync("booksJson.json","utf8")
// console.log(booksData);

const booksObj = JSON.parse(booksData) 
console.log(booksObj );

let min = booksObj[0].pages
for (let i = 0; i < booksObj.length; i++) {
     if(booksObj[i].pages < min){
       min = booksObj[i].pages
      }
    }
    console.log(min);
    
