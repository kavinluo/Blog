var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log('redoReg');
  res.send('redoReg');
});

module.exports = router;
