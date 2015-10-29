var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/db')

var app = express()

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.get('/', function(req,res){
    res.send("Hello Ping let go mongOO")
})

app.listen(3000)
console.log('run in 3000')