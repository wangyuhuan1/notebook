/* 默认赋值，回调函数，箭头函数 */
function http(url,callback,type="get",){
    $.ajax({
        url,
        type,
        dataType:"json",
        success:res=>{
            callback(res)
        }
    })
}