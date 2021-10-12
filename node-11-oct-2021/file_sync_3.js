const fs = require("fs")
const process = require("process")

let file = process.argv[2]
let text = process.argv[3]

fs.writeFileSync(file , text, {flag:"a"})