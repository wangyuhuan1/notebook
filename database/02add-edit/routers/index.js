const Router=require('koa-router');
const router=new Router();
const AdminModel=require('../models/admin')
router.get('/api',async ctx=>{
    var data=await AdminModel.find({})
    console.log(data)
    ctx.body=data
})
router.get("/admin",async ctx=>{
    var data=await AdminModel.find({})
    console.log(data)
    await ctx.render('index',{data})
})
router.get('/delete',async ctx=>{
    var {id}=ctx.query
    await AdminModel.remove({_id:id})
    ctx.redirect('/admin')
})
router.get('/edit',async ctx=>{
    var data=JSON.parse(ctx.query.item)
    await ctx.render('edit',{data})
})
router.post('/doEdit',async ctx=>{
    var {_id,name,age}=ctx.request.body
    age=parseInt(age)
    await AdminModel.updateOne({_id},{name,age})
    ctx.redirect('/admin')
})
router.get('/add',async ctx=>{
    await ctx.render('add')
})
router.post('/doAdd',async ctx=>{
    var {name,age}=ctx.request.body
    console.log(name)
    var data=new AdminModel({
        name,
        age:parseInt(age)
    })
    ctx.redirect('/admin')
    await data.save()
})
module.exports=router