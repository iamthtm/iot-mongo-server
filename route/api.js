var express = require('express')
var router = express.Router()

var iot = require('../models/iot.js')

iot.methods(['get', 'put', 'post', 'delete'])
iot.register(router, '/api/iot')
iot.register(router, '/')

module.exports = router
