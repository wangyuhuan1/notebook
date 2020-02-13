var url="https://douban.uieee.com/v2/movie/top250"
function http({
    type="get",
    callback,
    data,
}){
    $.ajax({
        url,
        data,
        type,
        dataType:"jsonp",
        success:res=>{
            callback(res)
        }
    })
}
