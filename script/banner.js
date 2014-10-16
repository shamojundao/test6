	var move=0;//判断是否返回到起
	function addli(){
		
		$(".img_div .banner_ul").children("li").first().clone(true).insertAfter($(".img_div .banner_ul").children("li").last());
	}
	function bannerDiv(){
		
	var nli=$(".img_div .banner_ul").children("li").length;
	var width=parseInt($(".img_div .banner_ul").children("li").css("width"));
	var x=nli*width;
	$(".img_div").css("width",x);
	var box=document.getElementById("box");
	move+=width;
	var y=move+"px";
	$(".img_div").animate({left:"-="+width+"px"},2000);
	if(move>=(parseInt($(".img_div").css("width")))-parseInt($("#box").css("width"))-685){
		
		$(".img_div").animate({left:"0px"},0);
		move=0;	
	}
}