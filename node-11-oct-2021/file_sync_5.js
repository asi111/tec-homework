const fs = require("fs")



const data = fs.readFileSync("tex","utf8")

   const bookObj =  JSON.parse(data)

   console.log(bookObj.name);
   console.log(bookObj.pages);