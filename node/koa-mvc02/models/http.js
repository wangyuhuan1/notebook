const axios=require('axios')
function http({url,params}){
    return axios({
        baseURL:"https://music.aityp.com/"+url,
        params,
        method:"get"
    })
}
module.exports={
    getIndex:()=>{
        return http({
            url:"top/playlist"
        })
    },
    getDetail:(id)=>{
        return http({
            url:"playlist/detail",
            params:{
                id
            }
        })
    }
}