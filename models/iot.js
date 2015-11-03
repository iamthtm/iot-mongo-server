var restful = require('node-restful')
var mongoose = restful.mongoose

var iot = new mongoose.Schema({
  timestamp: String,
  iot_id: String,
  temperature: String,
  relative_humidity: String
})

module.exports = restful.model('iot', iot)
