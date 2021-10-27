const express = require("express");
const fs = require("fs")



const app = express();
const PORT = 8080;

let comments = "comments.json"

app.use(express.json());

const commentsArr = [];
let freeID = 0;
let email = "xyz";

app.patch("/comments/:id",(req,res)=>{
    const id = req.params.id
    const name = req.body.name
    const email = req.body.name

    const findI = commentsArr.findIndex(item => item.id ==id)

    if(findI >=0 ){
        commentsArr[findI].name = name
        commentsArr[findI].email = email
    saveData ()

    }
    else{
        res.send(404)
    }
})

app.delete("/comments/:id", (req, res) => {
  const id = req.params.id;
  const index = commentsArr.findIndex((item) => item.id == id);
  if (index >= 0) {
    const saveDelete = commentsArr.splice(index, 1);
    saveData ()

    res.send(saveDelete);
  } else {
    res.sendStatus(404);
  }
});

app.post("/comments", (req, res) => {
  const name = req.body.name;
  const comment = {
    name: name,
    id: freeID,
    email: email + "@gmail.com",
  };

  if (name == " ") {
    res.sendStatus(404);
  } else {
    commentsArr.push(comment);
    saveData ()
    res.send(commentsArr);
  }
  freeID++;
});

app.get("/comments/:id", (req, res) => {
  const id = req.params.id;
  let found = commentsArr.find((item) => (item.id = id));
  if (found) {
    res.send(`id exist ${found.id}`);
    saveData ()

  } else {
    res.sendStatus(404);
  }
});

app.get("/comments", (req, res) => {
  res.send(commentsArr);
});


function saveData (){
 const getData = JSON.stringify(commentsArr)
fs.writeFileSync( comments , getData )
}


app.listen(PORT, () => {
  console.log(`app listening to ${PORT}`);
});
