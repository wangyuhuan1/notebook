// const mongoose=require("mongoose")
// const Admin=require("./models/admin")
// mongoose.connect('mongodb://localhost/student', {useNewUrlParser: true});
// // AdminModel.find({},(err,data)=>{
// //     if(err) throw err;
// //     else console.log(data)
// // })  //回调函数
// Admin.find({}).then(data=>{
//     console.log(data)
// })
const koa=require('koa');
const app=new koa()
const Router=require('koa-router');
const router=new Router();
const AdminModel=require('./models/admin')
const cors=require('koa2-cors')
const render = require('koa-art-template');
const path=require("path")
//2.配置
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html', //后缀也可以写成.art
    debug: process.env.NODE_ENV !== 'production'
});
router.get('/',async ctx=>{
    var {name}=ctx.query
    var data=await AdminModel.find({name});
    if(data.length>0){
        ctx.body=data
    }else{
        ctx.body={
            code:200,
            msg:"没有获取数据"
        }
    }
})
router.get('/admin/top',async ctx=>{
    var data=await AdminModel.find({});
    await ctx.render('index',{data})
})
// router.get('./admin/top',async ctx=>{
//     ctx.body="后台管理界面"
// })
router.get('/delete',async ctx=>{
    console.log(ctx.query)
    var {id}=ctx.query
    await AdminModel.remove({_id:id})
    ctx.redirect('/admin/top')
})
app.use(cors())
app.use(router.routes())
app.listen(8080)