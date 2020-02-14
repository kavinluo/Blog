var settings = require('../settings');

var Db = require('mongodb').Db;

var Connection = require('mongodb').Connection;

var Server = require('mongodb').Server;

 //输出了创建的数据库连接
module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT, {}));
