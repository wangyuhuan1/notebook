const koa=require("koa");
const axios=require('axios');
const app=new koa();
app.use(async ctx=>{
    var url="https://music.aityp.com/top/playlist?cat=华语"
    var data=await axios.get(url);
    ctx.body=data
})
app.listen(8080)