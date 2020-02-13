const run=require('./reptile/db')
const koa=require('koa')
const Router=require('koa-router')
const router=new Router();
var cors=require('koa2-cors')
const app=new koa()
const detail=require('./reptile/detail')
const search=require('./reptile/search')
router.get('/duitang',async ctx=>{
    var data=await run();
    ctx.body=data
})
router.get('/duitang/detail',async ctx=>{
    var {id}=ctx.query
    var url=`https://www.duitang.com/p/atlas/?id=${id}`
    var data=await detail(url);
    ctx.body=data
})
router.get('/duitang/search',async ctx=>{
    var {kw}=ctx.query
    var url=`https://www.duitang.com/search/?kw=${kw}&type=feed`
    var data=await search(url)
    ctx.body=data
})
app.use(cors())
app.use(router.routes())
app.listen(8080)