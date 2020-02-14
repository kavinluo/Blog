var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//  res.send('reg');
  res.render('reg', { title: '用户注册' });
});

module.exports = router;
