const express = require("express")
const app = express()
const path = require("path")
const PORT = 8080

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"public","index.html"))
})

app.get("/about",(req,res)=>{
   res.sendFile(path.join(__dirname,"public","about.html"))
})

app.listen(PORT)


