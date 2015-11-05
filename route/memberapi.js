var express = require('express')
var router = express.Router()

var member = require('../models/member.js')

member.methods(['get', 'put', 'post', 'delete'])
member.register(router, '/api/member')

router.post('/login',function(req,res){
	console.log(req.body.username);
	member.find({ username : req.body.username , password : req.body.password }).exec(function (err,results){
		if(err){
			res.status(500).send(err);
		}else{
			res.send(results);
			console.log(results);
		}

	});

});

module.exports = router
