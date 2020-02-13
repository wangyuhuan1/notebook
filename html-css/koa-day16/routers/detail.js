const router = require('koa-router')();
const axios = require('axios');
router.get("/detail/:id",async ctx=>{
    var id = ctx.params.id;
    var url =`https://douban.uieee.com/v2/movie/${id}`;
    var data  =  await axios.get(url);
    await ctx.render('detail',{data:data.data})
})
module.exports = router;