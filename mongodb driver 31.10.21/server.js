const mongo = require("mongodb");
const mongoClient = mongo.MongoClient;
const objectId = mongo.ObjectId;
const url = "mongodb://127.0.0.1:27017/";

// mongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   const dbo = db.db("blog");
// //   showAll(dbo,"author")
//     // showAll(dbo, "post");
// //   const authorId = "617e82a413c28588651f1926"
// //   const IDpost = "617e82a413c28588651f1921"
// //   addToPostById(dbo,authorId ,IDpost);
// // updateObj(dbo,authorId ,{post:[]})
// // printAuthorPost(dbo)
// // getObj(dbo, "author",{name:"gal",age:20,post:[]})
// BenUnderForty(dbo)

// });


function getObj(db, collection, obj) {
    db.collection(collection).insertOne(obj, (err, res) => {
      if (err) throw err;
      console.log("1 document inserted");
      //   db.close();
    });
  }

function addToPostById(db,id,postId,){
    db.collection("author").updateMany(
        {_id:objectId(id)},
        {$push:{post : postId}},(err,res)=>{
            if(err)throw err
            console.log(res);
        }
    )
}

function updateObj(db,id,newObj){
db.collection("author").updateOne({_id:objectId(id)},
{$set:newObj},(err,res)=>{
if(err)throw err
console.log(res);
})
}



function showAll(db, coll) {
  db.collection(coll)
    .find({})
    .toArray((err, coll) => {
      if (err) throw err;
      console.log(coll);
    });
}


function printAuthorPost(db){
    db.collection("author").find({"post.0":{$exists: true}}).toArray((err,res)=>{
        if(err)throw err
        console.log(res);

    })

}



    mongoClient.connect(url, (err, db) => {
        if (err) throw err;
        const dbo = db.db("blog");
        dbo.collection("author").find( {age: { $lt:40 } }).toArray((err,res)=>{
        if(err) throw err
        console.log(res);
    })
      
      });
      

      
    mongoClient.connect(url, (err, db) => {
        if (err) throw err;
        const dbo = db.db("blog");
        dbo.collection("author").find( {age: { $gt:40 } }).toArray((err,res)=>{
        if(err) throw err
        console.log(res);
    })
      
      });
      

          
    mongoClient.connect(url, (err, db) => {
        if (err) throw err;
        const dbo = db.db("blog");
        dbo.collection("author").find( {age: { $gt:60 , $lt:20} }).toArray((err,res)=>{
        if(err) throw err
        console.log(res);
    })
      
      });
      

      mongoClient.connect(url, (err, db) => {
        if (err) throw err;
        const dbo = db.db("blog");
        dbo.collection("author").find( {age: { $gt:60 , $lt:20} }).limit(3).toArray((err,res)=>{
        if(err) throw err
        console.log(res);
    })
      
      });
      
      
      mongoClient.connect(url, (err, db) => {
        if (err) throw err;
        const dbo = db.db("blog");
        dbo.collection("author").find( {_id:0}).toArray((err,res)=>{
        if(err) throw err
        console.log(res);
    })
      
      });
      

      mongoClient.connect(url, (err, db) => {
        if (err) throw err;
        const dbo = db.db("blog");
        dbo.collection("author").find({},{project :{_id:0}}).toArray((err,res)=>{
        if(err) throw err
        console.log(res);
    })
      
      });