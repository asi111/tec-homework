function updateById(req, res) {
  MongoClient.connect(url, function (err, db) {
    const title = req.body.title;
    if (err) throw err;
    const dbo = db.db("jsonPlaceholder");
    dbo
      .collection("todos")
      .findOneAndUpdate(
        { _id: objectId(req.params.id) },
        { $set: { title: title } },
        (err, result) => {
        
          if (err) throw err;
          if(title == undefined || title.length == 0){res.sendStatus(404)}
         
          if(result.value){
            res.send(result);
          }
          else{
            res.sendStatus(404)
          }
        }
      );
  });
}


function deleteById(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("jsonPlaceholder");
    dbo
      .collection("todos")
      .deleteOne({ _id: objectId(req.params.id) }, (err, doc) => {
        if (err) throw err;
        if (doc.deletedCount == 0) {
          res.sendStatus(404);
        }
        res.send(doc);
      });
  });
}

function insertDocs(db, coll, obj) {
  db.collection(coll).insertOne(obj, (err, res) => {
    if (err) throw err;
    if(res.title == " "){res.sendStatus(404)}
    res.send(res)
    console.log(res);
  });
}

function createCollections(db, coll) {
  db.createCollection(coll, (err, coll) => {
    if (err) throw err;
    console.log(coll);
  });
}

module.exports = { updateById, deleteById, insertDocs, createCollections };
