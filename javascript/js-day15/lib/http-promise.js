var baseUrl="https://music.aityp.com/"
function httpPromise({url,data}){
    return new Promise((resolve,reject)=>{
        $.ajax({
            url:baseUrl+url,
            data,
            type:"get",
            dataType:"json",
            success:res=>{
                resolve(res)
            },
            error:err=>{
                reject(err)
            }
        })
    })
}
function httpGetCat(keywords){
    return httpPromise({
        url:"top/playlist",
        data:{
            cat:keywords
        }
    })
}
function httpGetDetail(id){
    return httpPromise({
        url:"playlist/detail",
        data:{
            id
        }
    })
}
