const http=require("../models/http")
const index=async ctx=>{
    var res=await http.getIndex()
    var playlists=res.data.playlists
    await ctx.render('index',{playlists:playlists})
}
const detail=async ctx=>{
    var id=ctx.query.id
    var res=await http.getDetail(id)
    console.log(res.data)
    await ctx.render('detail')
}
module.exports={
    index,
    detail
}