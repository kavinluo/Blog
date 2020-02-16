var settings = require('./settings');

// var Db = require('mongodb').Db;

// var Connection = require('mongodb').Connection;

// var Server = require('mongodb').Server;

//  //输出了创建的数据库连接
// module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT, {}));

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/animals', function (err, client) {
  if (err) throw err

  var db = client.db('animals')
  
  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})