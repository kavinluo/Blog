const express = require("express");
const router = express.Router();
//相当于后台的路由，所有的后台处理都需要从这里经过

var indexRouter = require('./index');
var usersRouter = require('./users');
var postRouter = require('./post');
var regRouter = require('./reg');
var loginRouter = require('./login');
var loginOutRouter = require('./loginOut');

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/post', postRouter);
router.use('/reg', regRouter);
router.use('/login', loginRouter);
router.use('/loginOut', loginOutRouter);



module.exports = router;