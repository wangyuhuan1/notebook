const Koa=require("koa");
const app=new Koa();
const Router=require("koa-router")
const requireDirectory =require('require-directory')
requireDirectory(module,'./routers',{visit:whenLoadModule})
function whenLoadModule(obj){
    if(obj instanceof Router){
        app.use(obj.routes())
    }
}
app.listen(8080)