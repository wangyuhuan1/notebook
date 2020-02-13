const koa = require('koa');
const router  = require('koa-router')();
const app = new koa();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
router.get('/',async ctx=>{
    /* 在数据库  admin  123456 */
    ctx.set("Access-Control-Allow-Origin","*")
    ctx.body={
        name:"chengchao",
        age:18,
        sex:"男"
    }
})

router.post('/login',async ctx=>{
    ctx.body = ctx.request.body
})
router.get('/register',async ctx=>{
    console.log(ctx.request.query)
})

app.use(router.routes());
app.listen(8080)
