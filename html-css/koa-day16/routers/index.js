const router = require('koa-router')();
const axios = require('axios');
router.get("/",async ctx=>{
    var url = "https://douban.uieee.com/v2/movie/top250";
    var data  = await axios.get(url);
    var movies = data.data.subjects;
    await ctx.render('index',{movies:movies})
})
module.exports = router;