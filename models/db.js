/*
  db.js ：建立数据库连接
 */
let mongoose = require('mongoose');
const URL = 'mongodb://localhost:27017/myblog'
mongoose.connect(URL) //连接本地数据库blog
let db = mongoose.connection;
db.on('connected', function () {
  console.log('Mongoose connection open to ' + URL);
});
// 连接成功
db.on('open', function () {
  console.log('MongoDB Connection Successed', URL);
});
// 连接失败
db.on('error', function (err) {
  console.log('MongoDB Connection Error', err);
});


module.exports = db
