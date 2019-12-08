var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
	res.render('login', { title: 'Login' });
});

router.post('/login', function(req, res, next) {
	var username = req.body.username;
	var password = req.body.password;

	console.log(username, password);
	res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
	res.render('register', { title: 'Register' });
});

router.post('/register', function(req, res, next) {
	var { company_name, address, business_type, company_no } = req.body;

	// console.log(company_name, address, business_type, company_no);

	var data = {
		company_name: company_name,
		address: address,
		business_type: business_type,
		company_no: company_no
	};

	fs.writeFile('./data.json', JSON.stringify(data, null, 2), function(err) {
		if (err) throw err;
		console.log('Data saved!');
	});

	res.render('register', { title: 'Register' });
});

module.exports = router;
