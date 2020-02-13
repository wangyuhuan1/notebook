//wx-page
const audio = wx.getBackgroundAudioManager();
Page({
    data: {
        /* 记录音乐是否播放 */
        isPlay:false
    },
    //options(Object)
    onLoad: function(options){
        
    },
    handleClick(){
       if(this.data.isPlay){
           this.setData({
               isPlay:false
           })
           audio.pause()
       }else{
           this.setData({
               isPlay:true
           })
           audio.title = "成都";
           audio.src = "http://music.163.com/song/media/outer/url?id=436514312"
       }
    }
});