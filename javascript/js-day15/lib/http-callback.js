var baseUrl="https://music.aityp.com/"
function httpCallback({url,data,callback}){
    $.ajax({
        url:baseUrl+url,
        data,
        type:"get",
        dataType:"json",
        success:res=>{
            callback(res)
        }
    })
}
function httpGetCat(callback){
    httpCallback({
        url:"top/playlist",
        data:{
            cat:"华语"
        },
        callback,
    })
}
function httpGetDetail(id,callback){
    httpCallback({
        url:"playlist/detail",
        data:{
            id
        },
        callback,
    })
}