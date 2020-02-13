const Router=require("koa-router")
const router=new Router()
const axios=require('axios')
router.get("/",async ctx=>{
    var url="https://music.aityp.com/top/playlist"
    var res=await axios.get(url)
    var playlists=res.data.playlists
    await ctx.render('index',{playlists:playlists})
})
router.get("/detail",async ctx=>{
    var id=ctx.query.id
    var url="https://music.aityp.com/playlist/detail?id="+id;
    var res=await axios.get(url);
    console.log(res.data)
    await ctx.render('detail')
})
module.exports=router