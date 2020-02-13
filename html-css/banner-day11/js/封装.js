$(document).ready(function(){
    // 定义正在显示的元素的下标
    var index = 0;
    $(".next").click(function(){
        index++;
        if(index>4){
            index = 0;
        }
        animate(index);
        
    })
    $(".prev").click(function(){
        index--;
        if(index<0){
            index=4;
        }
        animate(index)
    })
    $(".all-icons>span").click(function(){
        index = $(this).index()
        animate(index);
        
    })
    function animate(index){
        $(".content img").eq(index).show().siblings().hide()
        $(".all-icons>span").eq(index).addClass("active").siblings().removeClass("active");
    }
    /* 
    1.先考虑右边的按钮,每次都点一下++,但是有一个临界值,达到临界值,下标重置
    2.点击左边的按钮,每次点一下--,达到临界值,下标重置
    3.点击左右按钮,焦点跟着改变
    4.点击焦点,焦点对应的下标的图片出现,让下标重置为当前焦点的下标
     */
})