const koa = require('koa');
const router = require('koa-router')();
const app = new koa();
router.get('/',async ctx=>{
    // 从数据库中取得的user="chengchao" pwd="123456"
    console.log(ctx.query)
    if(ctx.query.user==="chengchao" && ctx.query.pwd ==="123456"){
        ctx.body = "登陆成功"
    }
})
app.use(router.routes())
app.listen(8080)