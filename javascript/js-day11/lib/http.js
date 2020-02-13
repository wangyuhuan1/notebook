var baseUrl="https://music.aityp.com/"
function http({
    url,
    success,
    type="get"
}){
    $.ajax({
        url:baseUrl+url,
        type,
        success:res=>{
            success(res)
        }
    })
}
function getMvData(callback){
    http({
        url:"mv/first",
        success:res=>{
            callback(res)
        }
    })
}