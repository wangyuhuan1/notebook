### 一、安装依赖模块

```
yarn add mongoose koa koa-router art-template koa-art-template
```

### 二、mongoose连接数据

```
//1.导入mongoose
const mongoose=require('mongoose')
//2.连接数据库
mongoose.connect( 'mongodb://127.0.0.1:27017/student', {useNewUrlParser: true},(err)=>{
    if(err){throw err};
    console.log("数据库连接成功")
});
//3.定义Schema和数据库中的表映射
var AdminSchema = new mongoose.Schema({
    name:String,
    age:Number
})
//4.定义模型，操作数据库
var Admin = mongoose.model('Admin',AdminSchema,'admin');
//5.查询数据库
Admin.find({}).then(data=>{
    console.log(data)
})

```



