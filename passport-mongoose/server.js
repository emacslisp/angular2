var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://10.2.2.2:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Table created!");
    db.close();
  });
});
