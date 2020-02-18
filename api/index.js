var express = require('express');
const bodyParser = require('body-parser');
var crypto = require('crypto')
var User = require('../models/user');

var API = express();
API.use(bodyParser.json());
API.use(bodyParser.urlencoded({
  extended: false
}));

//  提交注册
API.post('/api/reg', function (req, res) {
  // 获取用户提交的信息
  let postData = {
    username: req.body.username,
    password: req.body.password,
  };
  User.findOne({
    username: postData.username
  }, function (err, data) {
    if (data) {
      res.send('用户名已被注册');
    } else {
      // 保存到数据库
      User.create(postData, function (err, data) {
        if (err) throw err;
        console.log('注册成功');
       res.redirect('/userList');
      })
    }
  });
});

// 获取所有用户列表
API.get('/userList', function (req, res) {
  var userList = User.find({}, function (err, data) {
      if (err) throw  err;
      res.render('userList', { data: data });
  });
});

//  提交登录
API.post('/login', function (req, res) {
  var postData = {
      username: req.body.username,
      password: req.body.password
  };
  User.findOne({
      username: postData.username,
      password: postData.password
  }, function (err, data) {
      if(err) throw err;
      if(data){
        res.redirect('/');
        console.log('登录成功');
      }else{
          res.send('账号或密码错误')
      }
  } )
});

module.exports = API;
