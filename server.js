var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var Model = require('./models/iot.js')

mongoose.connect('mongodb://localhost/iot')

var app = express()

	app.use(express.static('public'))
	app.use(bodyParser.urlencoded({extended: true}))
	app.use(bodyParser.json())
	app.use('/', require('./route/api.js'))

	app.use('/', require('./route/memberapi.js'))
	

//Del
	app.delete('/api/iot/:id', function (req, res) {
		Model.findById(req.params.id, function (err, Model) {
			Model.remove(function (err) {
				if (!err) {
					console.log('removed')
					return res.send('')
				} else {  
					console.log(err) 
				}
			})
		})
	})
app.listen(3000)
console.log('run in 3000')