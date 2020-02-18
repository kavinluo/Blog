var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页', });
});

router.get('/users', function(req, res, next) {
  res.render('users', { title: 'user' });
});

router.get('/reg', function(req, res, next) {
  res.render('reg', { title: 'reg' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/loginOut', function(req, res, next) {
  res.render('loginOut', { title: 'loginOut' });
});

module.exports = router;
