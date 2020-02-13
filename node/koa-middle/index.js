//中间件 匹配路由之前和路由完成之后要进行的一些操作
//中间件会一个个执行，一个中间件没有执行完毕不会执行下一个
//next()函数会往下执行
/* koa设置中间件 */
const Koa=require('koa')
const app=new Koa();
app.use(async(ctx,next)=>{
    console.log(1)
    ctx.body="hello world"
    await next()
})
app.use(async(ctx,next)=>{
    console.log(2)
})
app.listen(8080)