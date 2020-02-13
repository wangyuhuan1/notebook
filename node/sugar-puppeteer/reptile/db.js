const puppeteer=require('puppeteer')
const url="https://www.duitang.com/"
async function run(){
    //启动puppeteer，创建一个Chrome的实例
    const browser =await puppeteer.launch();
    //在浏览器中新建一个页面
    const page=await browser.newPage()
    //使用page.goto()函数去打开一个页面
    await page.goto(url,{
        waitUntil:'networkidle2'
    })
    await page.waitFor(2000)
    await page.hover(".dynamic-feed-item")
    let res=await page.evaluate(()=>{
        var $=window.jQuery
        var items=$(".dynamic-feed-item")
        var kw=$('#dt-search .ipt').val()
        var links=[];
        if(items.length>0){
            items.each((index,item)=>{
                var avatar=$(item).find(".avatar").attr("src")
                var username=$(item).find(".username").html()
                var publish_time=$(item).find(".publish-time").html()
                var desc=$(item).find(".dynamic-album-desc").html()
                var imgs=$(item).find(".dynamic-multi-img-container a img")
                var urls=imgs.map((index,item)=>{
                    return $(item).attr("src")
                })
                var like=$(item).find(".like-action .detail-text").html()
                var collected=$(item).find(".favorite-action .detail-text").html()
                var id=$(item).find(".item-id").attr("data-id")
                links.push({
                    avatar,
                    username,
                    publish_time,
                    desc,
                    urls:[...urls],
                    like,
                    collected,
                    id,
                    href:$(item).find(".dynamic-multi-img-container a").attr("href"),
                    kw,
                })
            })
        }
        return links
    })
    browser.close()
    return res
}
module.exports=run
