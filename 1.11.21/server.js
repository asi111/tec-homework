const express = require("express"),
  app = express(),
  mongo = require("mongodb"),
  mongoClient = mongo.MongoClient,
  objectId = mongo.ObjectId,
  PORT = 8080,
  url = "mongodb://localhost:27017",
  client = mongoClient.connect(url);




  client
  .then((db) => {
    console.log("connected");
    const dbo = db.db("jsonPlaceholder");
    dbo
      .collection("todos")
      .find({})
      .toArray().then((res) => { 
        console.log(res);
      });
  })
  .catch((err) => {
    console.error(err);
  });


app.listen(PORT, () => {
  console.log(`app listening to ${PORT}`);
});
