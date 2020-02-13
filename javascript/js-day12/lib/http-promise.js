var baseUrl="https://music.aityp.com/"
function http(url){
    return new Promise((resolve,reject)=>{
        $.ajax({
            url:baseUrl+url,
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