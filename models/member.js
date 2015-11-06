var restful = require('node-restful')
var mongoose = restful.mongoose
//รูปแบบการจัดเก็บข้อมูลและระบุtype ของข้อมูล
var member = new mongoose.Schema({
  name : String,
  surname : String ,
  username :String ,
  password :String 

})

module.exports = restful.model('member', member)
