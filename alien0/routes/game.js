// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


// module.exports = router;

// exports.a = 1;
var PI = Math.PI;  
  
exports.area = function (r) {  
  return PI * r * r;  
};  
  
exports.circumference = function (r) {  
  return 2 * PI * r;  
};