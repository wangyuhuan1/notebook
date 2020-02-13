const puppeteer = require("puppeteer");
async function search(url) {
    /* 1.启动puppeteer,创建一个Chrome的实例 */
    const browser = await puppeteer.launch(
        // {
        //     headless: false,
        //     slowMo: 20
        // }
    );
    /* 2.在浏览器中新建一个页面 */
    const page = await browser.newPage();
    /* 3.使用page.goto()函数去打开一个页面 */
    await page.goto(url, {
        waitUntil: 'networkidle2'
    })
    /* 4.选中点击的元素 */
    /* 5.让页面等待1s */
    await page.waitFor(2000)
    await page.hover(".woo")
    // let res=await page.evaluate(()=>{
    //     var $=window.jQuery
    //     var img=$(".mbpho img").attr("src")
    //     return{
    //         img
    //     }
    // })
    let res=await page.evaluate(()=>{
        var $=window.jQuery
        var items=$(".woo")
        var links=[];
        if(items.length>0){
            items.each((index,item)=>{
                var img=$(item).find(".mbpho img").attr("src")
                var type=$(item).find(".wooscr .g").html()
                var liked=$(item).find(".wooscr .d2 span").html()
                var collected=$(item).find(".wooscr .d1 span").html()
                var at=$(item).find(".f img").attr("src")
                var name=$(item).find(".f .p").html()
                var album=$(item).find(".f p span a").html()
                links.push({
                    img,
                    type,
                    liked,
                    collected,
                    at,
                    name,
                    album
                })
            })
        }
        return links
    })
    browser.close();
    return res;
}
module.exports=search