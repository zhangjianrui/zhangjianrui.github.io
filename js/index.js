// 目录展开
$(function(){
	
 $(".catalog ul li").next("ul").hide();


$(".catalog ul li").click(function()
{
$(this).next("ul").toggle().parent('ul').siblings().children('ul').hide();
});

})

