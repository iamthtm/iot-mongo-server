var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var Model = require('./models/iot.js')
var iot = require('./models/iot.js')
mongoose.connect('mongodb://localhost/iot')

var app = express()

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api', require('./route/api'))

app.post('/', function (req, res) {
  var obj = new Model(req.body)
  obj.save(function (err, obj) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(obj)
    }
  })
})

app.get('/', function (req, res) {
  Model.find({}).exec(function (err, results) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(results)
    }
  })
})


app.listen(3000)
console.log('run in 3000')