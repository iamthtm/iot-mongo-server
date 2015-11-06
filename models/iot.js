var restful = require('node-restful')
var mongoose = restful.mongoose
//รูปแบบการจัดเก็บข้อมูลและระบุtype ของข้อมูล
var iot = new mongoose.Schema({
  timestamp: { type : Date , default : Date.now},
  iot_id: Number,
  temperature: Number,
  relative_humidity: Number
})

module.exports = restful.model('iot', iot)
