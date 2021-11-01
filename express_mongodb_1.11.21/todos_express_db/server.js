const express = require("express"),
  app = express(),
  funExp = require("../mod")
  PORT = 8080,
  mongo = require("mongodb"),
  MongoClient = mongo.MongoClient,
  objectId = mongo.ObjectId,
  url = "mongodb://localhost:27017";
app.use(express.json());

app.get("/todos", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("jsonPlaceholder");
    dbo
      .collection("todos")
      .find({})
      .toArray(function (err, todos) {
        if (err) throw err;
        //   console.log(todos);
        res.send(todos);
      });
  });
});

app.post("/todos", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    const title = req.body.title;
    const userId = req.body.userId;
    const id = req.body.id;
    const completed = req.body.completed;
    if (err) throw err;
    const dbo = db.db("jsonPlaceholder");
    funExp.insertDocs(dbo, "todos", {
      userId: userId,
      id: id,
      title: title,
      completed: completed,
    });
  });
});

app.delete("/todos/:id", (req, res) => {
  funExp.deleteById(req, res);
});

app.patch("/todos/:id", (req, res) => {
  funExp.updateById(req, res);
});

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const dbo = db.db("jsonPlaceholder");

  //   createCollections(dbo, "todos");
  // funExp.insertDocs(dbo, "todos", {
  //   userId: 2,
  //   id: 2,
  //   title: "title2",
  //   completed: true,
  // });
});



app.listen(PORT, () => {
  console.log(`app listening to ${PORT}`);
});
