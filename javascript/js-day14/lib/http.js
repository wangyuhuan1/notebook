var baseUrl="https://music.aityp.com/"
function http(url,data){
    return new Promise((resolve,reject)=>{
        $.ajax({
            url:baseUrl+url,
            type:"get",
            data,
            success:res=>{
                resolve(res)
            },
            error:err=>{
                reject(err)
            }
        })
    })
}
// function getCat(){
//     return http('top/playlist',{cat:"华语"})
// }