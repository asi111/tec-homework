function updateById(req, res) {
    MongoClient.connect(url, function (err, db) {
      const title = req.body.title;
      if (err) throw err;
      const dbo = db.db("jsonPlaceholder");
      dbo
        .collection("todos")
        .updateOne(
          { _id: objectId(req.params.id) },
          { $set: { title: title } },
          (err, result) => {
            if (err) throw err;
            res.send(result);
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
        .deleteOne({ _id: objectId(req.params.id) }, (err, result) => {
          if (err) throw err;
          res.send(result);
        });
    });
  }
  
  function insertDocs(db, coll, obj) {
    db.collection(coll).insertOne(obj, (err, res) => {
      if (err) throw err;
      console.log(res);
    });
  }
  
  
function createCollections(db, coll) {
    db.createCollection(coll, (err, coll) => {
      if (err) throw err;
      console.log(coll);
    });
  }
  
  

  module.exports = 
  {updateById,deleteById,insertDocs,createCollections
  }