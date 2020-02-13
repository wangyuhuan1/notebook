const mongoose=require("mongoose")
mongoose.connect('mongodb://localhost/student', {useNewUrlParser: true},(err)=>{
    if(err){throw err};
    console.log("数据库连接成功")
});
module.exports=mongoose