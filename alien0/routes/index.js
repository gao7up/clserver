var express = require('express');
var router = express.Router();
var info = require('./game');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// url server:3000/game?id=999&hp=888 
router.get('/game', function (req, res,next) {
	console.log('print a');
	var id = req.query.id;
	var hp = req.query.hp;
	var json1 = {'name':id, 'hp':hp};
	//res.json(json1);
	next();
});


console.log(info.area(4));


router.get('/game', function (req, res) {
	console.log('print something');
	res.send('hello');
});



module.exports = router;
