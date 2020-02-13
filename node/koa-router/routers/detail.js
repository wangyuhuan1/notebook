const router=require("koa-router")();
router.get('/detail',async ctx=>{
    ctx.body="detail"
})
module.exports=router