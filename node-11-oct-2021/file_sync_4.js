const fs = require("fs")

const process = require("process")
let file = process.argv[2]
const book = {
    name:"book1",
    pages:123
}


const bookData = JSON.stringify(book)
// console.log(book);

fs.writeFileSync(file , bookData , {flag:"w"})