const koa = require('koa');
const app = new koa();
const router = require("koa-router")();
router.get("/",async ctx=>{
    ctx.body="豆瓣top250"
})
router.get("/detail",async ctx=>{
    ctx.body = "电影详情"
})
// ctrl+c退出命名行
app.use(router.routes())
app.listen(8080)