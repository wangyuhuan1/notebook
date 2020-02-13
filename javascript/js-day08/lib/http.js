var url="https://douban-api.uieee.com/v2/movie/top250"
function http({type="get",callback,data={}}){
    $.ajax({
        url,
        data,
        type,
        dataType:"jsonp",
        success:res=>{
            callback(res)
            $("#loading").hide()
        },
        beforeSend:function(){
            $("#loading").show()
        }
    })
}
function onReachBottom(){
    var dh=$(document).height()  //整个文档的高度
    var sh=$(window).scrollTop() //滚动条距离顶部的高度
    var wh=$(window).height();
    return(Math.ceil(sh+wh)==dh)?true:false;
}