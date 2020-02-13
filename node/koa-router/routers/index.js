const router=require("koa-router")();
router.get('/',async ctx=>{
    ctx.cookies.set("name","zhangsan",{
        maxAge:1000*30  //cookie的有效时长
    })
    console.log(ctx.cookies.get("name"))
    ctx.body="hello world"
})
module.exports=router;