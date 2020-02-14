var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');//Cookie解析的中间件
var logger = require('morgan');
const session = require('express-session')// 回话支持
var mainRouter = require('./routes/main');

const MongoStore = require('connect-mongodb')
const settings = require('./settings')



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // 设置为模板相对路径
app.set('view engine', 'jade'); // 设置模板引擎
app.use(cookieParser()); //Cookie解析的中间件
app.use(session({ // 回话支持
  resave: false, //添加 resave 选项
  saveUninitialized: true, //添加 saveUninitialized 选项
  secret:settings.cookieSecret,
  /* store:new MongoStore({ // 把回话信息储存到数据库中以免丢失
    db:settings.db
  }) */
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter); // 路由



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
