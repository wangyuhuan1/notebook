const puppeteer = require("puppeteer");
async function detail(url) {
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
    await page.hover("body")
    let res=await page.evaluate(()=>{
        var $=window.jQuery
        var avator=$(".author-wrap a img").attr("src")
        var name=$(".author-info .name").html()
        var date=$(".author-info .create-at").html()
        var desc=$(".atlas-desc").html()
        var img=$(".atlas-item img")
        var urls=img.map((index,item)=>{
            return $(item).attr("src")
        })
        var tag=$(".atlas-tags .tag")
        var tags=tag.map((index,item)=>{
            return $(item).html()
        })
        var like=$(".like span").html()
        var collected=$(".collection span").html()
        return{
            avator,
            name,
            date,
            desc,
            urls:[...urls],
            tags:[...tags],
            like,
            collected
        }
    })
    browser.close();
    return res;
}
module.exports=detail