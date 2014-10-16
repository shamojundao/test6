$(document).ready(function() {
 	$(".admint_left td a").click( function(){
		$(this).parent().parent().parent().find("td").removeClass("red");
		$(this).parent().addClass("red");	
	})  
	var a;
	$(".zf_table input").focus(function(){
		a=$(this).attr("value");
		$(this).attr("value","");	
	}).focusout(function(){
		if(!($(this).val())){
			$(this).attr("value",a);	
		}	
	});
});


function changeColor(){
	var length=$(".mx_div .mx_div_child table tr").length;
	for(var i=1;i<length;i++)
	{	
		//alert(length);
		if(i%2==0){
			//$(".mx_div .mx_div_child table tr:eq(i)").css({"background:","#efefef"});
			//$(".mx_div .mx_div_child table tr").eq(i).css})
			$(".mx_div .mx_div_child table tr").eq(i).css({"background-color":"green"});
		}
		else{
			//$(".mx_div .mx_div_child table tr:eq(i)").css({"background:","#fff"});
			$(".mx_div .mx_div_child table tr").eq(i).css({"backgroundColor":"yellow"});	
		}
	}	
}

function changePassWord(){

	$(window.parent.frames["child"].document).find("#chg_div").show();
}
function closeDiv(a){
	$(a).parent().parent().parent().hide();	
}


