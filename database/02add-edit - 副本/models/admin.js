const mongoose=require('./db')
//3.定义Schema和数据库中的表映射
var AdminSchema =mongoose.Schema({
    name:String,
    age:Number
})
//4.定义模型，操作数据库
var Admin = mongoose.model('Admin',AdminSchema,'admin');
module.exports=Admin