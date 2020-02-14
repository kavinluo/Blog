# 建站步骤

## 安装 Express

  - $ npm install -g express
  - express --help


  - $ express -t ejs myblog
    当前目录下出现了子目录 myblog，并且产生了一些文件：

 - $ cd myblog && npm install


## 热更新

  - 全局安装nodemon

    npm install -g nodemon
    或者安装到本地
    npm install nodemon --save

   -  package.json 中 node 替换 nodemon

      nodemon app.js


## 其他

   - settings.js 用于保存数据库的连接信息

  - mongoDB报错Cannot find module '../build/Release/bson'
   找到 web\node_modules\connect-mongodb\node_modules\bson\ext\index.js


  bson = require('../build/Release/bson');
  变成
  bson = require('../browser_build/bson');

- 报错 express-session deprecated undefined resave option; provide resave option app.js

  ```js
  app.use(session({
  resave: false, //添加 resave 选项
  saveUninitialized: true, //添加 saveUninitialized 选项
  secret: '', // 建议使用 128 个字符的随机字符串
  cookie: { maxAge: 60 * 1000 }
}));
```
