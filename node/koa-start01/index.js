const Koa=require("koa");
const router=require('./routers')
const path=require("path")
const app=new Koa();
const static =require("koa-static")
const render=require("koa-art-template")
render(app,{
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});
app.use(static(path.join(__dirname,"assets")))
app.use(router.routes()).use(router.allowedMethods())
app.listen(8080)