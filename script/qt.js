var check_name=/^[a-zA-Z0-9_-]{3,12}$/;
var check_password=/[a-zA-Z]\w{5,17}$/;//长度在6~18之间，只能包含字符、数字和下划线
var check_mail=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
var check_phone=/^1[3-8][0-9]{9}$/;//手机号
var value_prev;
var value_last;
var check_login_nick=/^[a-zA-Z0-9_]{3,16}$/;//注册昵称校验,用户名最短3个字符最长不超过16个字符
var log_name=false,log_passwd,log_yzm,nick,mble_or_mail,passwd,con_passwd,yzm,box,phone_yzm ,che_pwd,con_che_pwd,che_yzm,old_pwd,new_xg_pwd,con_new_xg_pwd,for_tel_or_mail=false,for_yzm=false,for_msg=false;
$(document).ready(function() {
		addli();
		setInterval('bannerDiv()',3000);//banner 函数
		showMoneyInput();
	 	chooseMoney();
		putFuntion();
		hoverInput();
		forgetPwd();//忘记密码校验
			/*修改密码*/
		$(".old_pwd").focus(function(){
			}).focusout(function(){
				if($(this).val()==""){
					$('<div class="ts" style="color:red;font-size:10px;">'+'*旧密码输入不能为空'+'</div>').insertAfter($(this));
					old_pwd=false;
					return false;	
				}
				else if(!(check_password.test($(this).val()))){
						$(this).parent().children(".ts").remove();
						$('<div class="ts" style="color:red;font-size:10px;">'+'长度在6~18之间，只能包含字符、数字和下划线'+'</div>').insertAfter($(this));
						old_pwd=false;
						return false;
					}
				else{
					old_pwd=true;	
				}
			});
		$(".new_xg_pwd").focus(function(){
		}).focusout(function(){
			if($(this).val()==""){
				$('<div class="ts" style="color:red;font-size:10px;">'+'*新密码输入不能为空'+'</div>').insertAfter($(this));
				new_xg_pwd=true;
				return false;	
			}
			else if(!(check_password.test($(this).val()))){
				$(this).parent().children(".ts").remove();
				$('<div class="ts" style="color:red;font-size:10px;">'+'*长度在6~18之间，只能包含字符、数字和下划线'+'</div>').insertAfter($(this));
						new_xg_pwd=false;
						return false;
					}
				else{
					new_xg_pwd=true;	
				}		
		});
		$(".con_new_xg_pwd").focus(function(){
		}).focusout(function(){
			if($(this).val()==""){
				$('<div class="ts" style="color:red;font-size:10px;">'+'*输入不能为空'+'</div>').insertAfter($(this));
				con_new_xg_pwd=false;
				return false;	
			}
			else if(!(check_password.test($(this).val()))){
				$(this).parent().children(".ts").remove();
				$('<div class="ts" style="color:red;font-size:10px;">'+'*长度在6~18之间，只能包含字符、数字和下划线'+'</div>').insertAfter($(this));
				con_new_xg_pwd=false;
				return false;	
			}
			else if($(this).val()!=$(".new_xg_pwd").val()){
				$(this).parent().children(".ts").remove();
				$('<div class="ts" style="color:red;font-size:10px;">'+'*确认密码和新密码必须相同'+'</div>').insertAfter($(this));
				con_new_xg_pwd=false;
				return false;		
			}
			else{
				con_new_xg_pwd=true;	
			}	
		});
//登录页校验
	$(".div .div_mdle .left .login_div .login_msg ul li .name_text").focus(function(){
		$(this).hide();
		$(this).next().show();
		$(this).next().focus();
		$(this).next().focusout(function() {
            if($(this).val()==""){	
				$(this).hide();
				$(this).prev().show();			
			}		
			if($(".div .div_mdle .left .login_div .login_msg ul li .name_text").css("display")!="none"){
					if($(this).parent().children(".ts").length>=1){
						$(this).parent().children(".ts").remove();
						$('<div class="ts" style="color:red;font-size:10px;">'+'*用户名输入不能为空'+'</div>').insertAfter($(this));
					}
					else{
						$('<div class="ts" style="color:red;font-size:10px;">'+'*用户名输入不能为空'+'</div>').insertAfter($(this));	
					}
					log_name=false;
					return false;
			}		
			/*else if(!(check_login_nick).test($(".name_input").val())){
				if($(this).parent().children(".ts").length>=1){
						$(this).parent().children(".ts").remove();
						$('<div class="ts" style="color:red;font-size:10px;">'+'*用户名最短3个字符最长不超过16个字符'+'</div>').insertAfter($(this));
					}
					else{
						$('<div class="ts" style="color:red;font-size:10px;">'+'*用户名最短3个字符最长不超过16个字符'+'</div>').insertAfter($(this));	
					}
				
				log_name=false;
				return false;	
		}*/
		else{
						$(this).parent().children(".ts").remove();
						log_name=true;
		}	
		});		   
	});
	$(".div .div_mdle .left .login_div .login_msg ul li .pwd_text").focus(function(){
		$(this).hide();
		$(this).next().show();
		$(this).next().focus(); 
		$(this).next().focusout(function() {
            if($(this).val()==""){	
				$(this).hide();
				$(this).prev().show();			
		}
		if($(".div .div_mdle .left .login_div .login_msg ul li .pwd_text").css("display")!="none"){
					if($(this).parent().children(".ts").length>=1){
						$(this).parent().children(".ts").remove();
						$('<div class="ts" style="color:red;font-size:10px;">'+'*密码输入不能为空'+'</div>').insertAfter($(this));
					}
					else{
						$('<div class="ts" style="color:red;font-size:10px;">'+'*密码输入不能为空'+'</div>').insertAfter($(this));	
					}
					log_passwd=false;
				}
			else if(!(check_password).test($(this).val())){
				if($(this).parent().children(".ts").length>=1){
						$(this).parent().children(".ts").remove();
						$('<div class="ts" style="color:red;font-size:10px;">'+'*长度在6~18之间，只能包含字符、数字和下划线'+'</div>').insertAfter($(this));
					}
					else{
						$('<div class="ts" style="color:red;font-size:10px;">'+'*长度在6~18之间，只能包含字符、数字和下划线手机'+'</div>').insertAfter($(this));	
					}
					log_passwd=false;			
			}
		else{
				$(this).parent().children(".ts").remove();					
				log_passwd=true ;		
			}		 
		});
});
$(".div .div_mdle .left .login_div .login_msg ul li .yzm_text").focus(function(){
		$(this).hide();
		$(this).next().show();
		$(this).next().focus(); 
		$(this).next().focusout(function() {
            if($(this).val()==""){	
				$(this).hide();
				$(this).prev().show();			
			} 
			if($(".div .div_mdle .left .login_div .login_msg ul li .yzm_text").css("display")!="none"){
				if($(this).parent().children(".ts").length>=1){
					$(this).parent().children(".ts").remove();
					$('<div class="ts" style="color:red;font-size:10px;">'+'*验证码输入不能为空'+'</div>').insertAfter($(this));
				}
				else{
						$('<div class="ts" style="color:red;font-size:10px;">'+'*验证码输入不能为空'+'</div>').insertAfter($(this));	
					}
				log_yzm=false;
			}
			else 
				{	
					$(this).parent().children(".ts").remove();					
					log_yzm=true;	
				}
		});
});


	$(".div .div_mdle .left .login_div .h1 li").click(function (){		
		$(".h1").children("li").removeClass("show_li");
		$(".h1").children("li").eq($(this).index()).addClass("show_li");
		$(".div .div_mdle .left .login_div .login_msg").children("ul").removeClass("show_ul");
		$(".div .div_mdle .left .login_div .login_msg").children("ul").eq($(this).index()).addClass("show_ul");
	});
	
	$(".div .div_mdle .left .login_div .login_msg ul li .nick_text").focus(function(){
		$(this).hide();
		$(this).next().show();
		$(this).next().focus();
		$(this).next().focusout(function() {
            if($(this).val()==""){	
				$(this).hide();
				$(this).prev().show();                                                                              			
			}
			if($(".div .div_mdle .left .login_div .login_msg ul li .nick_text").css("display")!="none"){
					if($(this).parent().children(".ts").length>=1){
						$(this).parent().children(".ts").remove();
						$('<div class="ts" style="color:red;font-size:10px;">'+'*输入不能为空'+'</div>').insertAfter($(this));
					}
					else{
						$('<div class="ts" style="color:red;font-size:10px;">'+'*输入不能为空'+'</div>').insertAfter($(this));	
					}
					nick=false;
					return false;
			}		
			else if(!(check_login_nick).test($(".nick_input").val())){
				if($(this).parent().children(".ts").length>=1){
						$(this).parent().children(".ts").remove();
						$('<div class="ts" style="color:red;font-size:10px;">'+'*昵称名最短3个字符最长不超过16个字符'+'</div>').insertAfter($(this));
					}
					else{
						$('<div class="ts" style="color:red;font-size:10px;">'+'*昵称名最短3个字符最长不超过16个字符'+'</div>').insertAfter($(this));	
					}
				
				nick=false;
				return false;	
		}
		else{
				$(this).parent().children(".ts").remove();				
				nick=true;		
		}		
		});	   
	});
	//邮箱或者手机
	$(".div .div_mdle .left .login_div .login_msg ul li .mble_or_mail_text").focus(function(){
		$(this).hide();
		$(this).next().show();
		$(this).next().focus();
		$(this).next().focusout(function() {
            if($(this).val()==""){	
				$(this).hide();
				$(this).prev().show();			
			}
			if($(".div .div_mdle .left .login_div .login_msg ul li .mble_or_mail_text").css("display")!="none"){
					if($(this).parent().children(".ts").length>=1){
						$(this).parent().children(".ts").remove();
						$('<div class="ts" style="color:red;font-size:10px;">'+'*输入不能为空'+'</div>').insertAfter($(this));
					}
					else{
						$('<div class="ts" style="color:red;font-size:10px;">'+'*输入不能为空'+'</div>').insertAfter($(this));	
					}
					mble_or_mail=false;
					return false;
				}
			else if((!(check_phone).test($(this).val()))&&(!(check_mail).test($(this).val()))){
				if($(this).parent().children(".ts").length>=1){
						$(this).parent().children(".ts").remove();
						$('<div class="ts" style="color:red;font-size:10px;">'+'*请输入正确的邮箱或者手机'+'</div>').insertAfter($(this));
					}
					else{
						$('<div class="ts" style="color:red;font-size:10px;">'+'*请输入正确的邮箱或者手机'+'</div>').insertAfter($(this));	
					}
					mble_or_mail=false;
					return false;			
			}
			else if(check_mail.test($(this).val())){//如果输入的是邮箱
						$(this).parent().children(".ts").remove();				
				mble_or_mail=true;	
				phone_yzm=true;	
				$(".phone_li").hide();	
			}
			else if(check_phone.test($(this).val())){//如果输入的是手机
				$(this).parent().children(".ts").remove();					
				mble_or_mail=true;
				$(".phone_li").show();	
			}
		});		   
	});
	
	$(".div .div_mdle .left .login_div .login_msg ul li .passwd_text").focus(function(){
		$(this).hide();
		$(this).next().show();
		$(this).next().focus();
		$(this).next().focusout(function() {
            if($(this).val()==""){	
				$(this).hide();
				$(this).prev().show();			
			}
			if($(".div .div_mdle .left .login_div .login_msg ul li .passwd_text").css("display")!="none"){
					if($(this).parent().children(".ts").length>=1){
						$(this).parent().children(".ts").remove();
						$('<div class="ts" style="color:red;font-size:10px;">'+'*输入不能为空'+'</div>').insertAfter($(this));
					}
					else{
						$('<div class="ts" style="color:red;font-size:10px;">'+'*输入不能为空'+'</div>').insertAfter($(this));	
					}
					passwd=false;
				}
			else if(!(check_password).test($(this).val())){
				if($(this).parent().children(".ts").length>=1){
						$(this).parent().children(".ts").remove();
						$('<div class="ts" style="color:red;font-size:10px;">'+'*长度在6~18之间，只能包含字符、数字和下划线'+'</div>').insertAfter($(this));
					}
					else{
						$('<div class="ts" style="color:red;font-size:10px;">'+'*长度在6~18之间，只能包含字符、数字和下划线手机'+'</div>').insertAfter($(this));	
					}
					passwd=false;			
			}
		else{
				$(this).parent().children(".ts").remove();					
				passwd=true;
			}
		});		   
	});
	
	$(".div .div_mdle .left .login_div .login_msg ul li .con_passwd_text").focus(function(){
		$(this).hide();
		$(this).next().show();
		$(this).next().focus();
		$(this).next().focusout(function() {
            if($(this).val()==""){	
				$(this).hide();
				$(this).prev().show();			
			}
			if($(".div .div_mdle .left .login_div .login_msg ul li .con_passwd_text").css("display")!="none"){
					if($(this).parent().children(".ts").length>=1){
						$(this).parent().children(".ts").remove();
						$('<div class="ts" style="color:red;font-size:10px;">'+'*输入不能为空'+'</div>').insertAfter($(this));
					}
					else{
						$('<div class="ts" style="color:red;font-size:10px;">'+'*输入不能为空'+'</div>').insertAfter($(this));	
					}
					con_passwd=false;
			}
			else if(!(check_password).test($(this).val())){
				if($(this).parent().children(".ts").length>=1){
					$(this).parent().children(".ts").remove();
					$('<div class="ts" style="color:red;font-size:10px;">'+'*长度在6~18之间，只能包含字符、数字和下划线'+'</div>').insertAfter($(this));
					}
					else{
						$('<div class="ts" style="color:red;font-size:10px;">'+'*长度在6~18之间，只能包含字符、数字和下划线手机'+'</div>').insertAfter($(this));	
					}
					con_passwd=false;			
			}
			else if($(this).val()!=$(".passwd_input").val()){
				if($(this).parent().children(".ts").length>=1){
					$(this).parent().children(".ts").remove();
					$('<div class="ts" style="color:red;font-size:10px;">'+'*确认密码必须和密码相同'+'</div>').insertAfter($(this));
					}
					else{
						$('<div class="ts" style="color:red;font-size:10px;">'+'*确认密码必须和密码相同机'+'</div>').insertAfter($(this));	
					}
					con_passwd=false;	
		}
		else{
				$(this).parent().children(".ts").remove();
				con_passwd=true;
			}
		});		   
	});
	
	$(".div .div_mdle .left .login_div .login_msg ul li .register_yzm_li_text").focus(function(){
		$(this).hide();
		$(this).next().show();
		$(this).next().focus();
		$(this).next().focusout(function() {
            if($(this).val()==""){	
				$(this).hide();
				$(this).prev().show();	
			}
			if($(".div .div_mdle .left .login_div .login_msg ul li .register_yzm_li_text").css("display")!="none"){
					if($(this).parent().children(".ts").length>=1){
						$(this).parent().children(".ts").remove();
						$('<div class="ts" style="color:red;font-size:10px;">'+'*输入不能为空'+'</div>').insertAfter($(this));
					}
					else{
						$('<div class="ts" style="color:red;font-size:10px;">'+'*输入不能为空'+'</div>').insertAfter($(this));	
					}
					yzm=false;
			}
			else{
					$(this).parent().children(".ts").remove();
					yzm=true;
			}
		});		   
	});
	$(".div .div_mdle .left .login_div .login_msg ul li .phone_li_text").focus(function(){
		$(this).hide();
		$(this).next().show();
		$(this).next().focus();
		$(this).next().focusout(function() { 
            if($(this).val()==""){	
				$(this).hide();
				$(this).prev().show();				
			}
			if($(".div .div_mdle .left .login_div .login_msg ul li .phone_li_text").css("display")!="none"){
					if($(this).parent().children(".ts").length>=1){
						$(this).parent().children(".ts").remove();
						$('<div class="ts" style="color:red;font-size:10px;">'+'*输入不能为空'+'</div>').insertAfter($(this).next());
					}
					else{
						$('<div class="ts" style="color:red;font-size:10px;">'+'*输入不能为空'+'</div>').insertAfter($(this).next());	
					}
					phone_yzm=false;
				}
			else{
				$(this).parent().children(".ts").remove();
				phone_yzm=true;	
			}
		});				   
	});
	
	/*修改密码校验*/
	$(".div .div_mdle .left .login_div .che_ul .new_pwd_text").focus(function(){
			$(this).hide();
			$(this).next().show();
			$(this).next().focus();
			$(this).next().focusout(function(){
				if($(this).val()==""){
					$(this).hide();
					$(this).prev().show();	
				}
				if($(this).prev().css("display")!="none"){
					$(this).parent().children(".ts").remove();
					$('<div class="ts" style="font-size:12px;color:red;">'+'新密码不能为空'+'</div>').insertAfter($(this));	
					che_pwd=false;
				}
				else{
					if(!(check_password.test($(this).val()))){
						$(this).parent().children(".ts").remove();
						$('<div class="ts" style="font-size:12px;color:red;">'+'长度在6~18之间，只能包含字符、数字和下划线'+'</div>').insertAfter($(this));
						che_pwd=false;	
					}
					else{
						$(this).parent().children(".ts").remove();
						che_pwd=true;	
					}	
				}
			});
		});
		
		$(".div .div_mdle .left .login_div .che_ul .con_new_pwd_text").focus(function(){
			$(this).hide();
			$(this).next().show().focus();
			$(this).next().focusout(function(){
				if($(this).prev().css("display")!="none"){
					$(this).parent() .children(".ts").remove();
					$('<div class="ts" style="font-size:12px;color:red;">'+'确认密码输入不能为空'+'</div>').insertAfter($(this));
					con_che_pwd=false;
				}
				else{
					if(!(check_password.test($(this).val()))){
						$(this).parent() .children(".ts").remove();
						$('<div class="ts" style="font-size:12px;color:red;">'+'长度在6~18之间，只能包含字符、数字和下划线'+'</div>').insertAfter($(this));
						con_che_pwd=false;
						return false;	
					}
					else if($(this).val()!=($(".new_pwd_input").val())){
						$(this).parent() .children(".ts").remove();
						$('<div class="ts" style="font-size:12px;color:red;">'+'确认密码和密码必须相同'+'</div>').insertAfter($(this));
						con_che_pwd=false;
						return false;	
					}		
				}
				$(this).parent().children(".ts").remove();
				con_che_pwd=true;		
			})	
		})
		
	$(".div .div_mdle .left .login_div .che_ul .che_yzm_text").focus(function(){
		$(this).hide();
		$(this).next().show().focus().focusout(function(){
			if($(this).val()==""){
				$(this).hide();
				$(this).prev().show();	
			}
			if($(this).prev().css("display")!="none"){
				$(this).parent().children(".ts").remove();
				$('<div class="ts" style="font-size:12px;color:red;">'+'验证码输入不能为空'+'</div>').insertAfter($(this));
				che_yzm=false;
				return false;
			}
			else{
				$(this).parent().children(".ts").remove();
				che_yzm=true;
			}	
		});	
	})	
	

});
/*修改密码*/
	function pwdXg(){	
		if(!old_pwd){
			$(".old_pwd").parent().children(".ts").remove();
			$('<div class="ts" style="color:red;font-size:10px;">'+'*长度在6~18之间，只能包含字符、数字和下划线'+'</div>').insertAfter($(".old_pwd").parent().children("input"));
			return false;	
		}
		if(!new_xg_pwd){
			$(".new_xg_pwd").parent().children(".ts").remove();
			$('<div class="ts" style="color:red;font-size:10px;">'+'*长度在6~18之间，只能包含字符、数字和下划线'+'</div>').insertAfter($(".new_xg_pwd").parent().children("input"));
			return false;	
		}
		if(!con_new_xg_pwd){
			$(".con_new_xg_pwd").parent().children(".ts").remove();
			$('<div class="ts" style="color:red;font-size:10px;">'+'*长度在6~18之间，只能包含字符、数字和下划线'+'</div>').insertAfter($(".con_new_xg_pwd").parent().children("input"));
			return false;	
		}	
	}
	
//忘记密码校验	
function forgetPwd(){
$(".for_tel_text").focus(function(){
		$(this).hide();
		$(this).next().show();
		$(this).next().focus();
		$(this).next().focusout(function() {
            if($(this).val()==""){	
				$(this).hide();
				$(this).prev().show();			
			}
			if($(".for_tel_text").css("display")!="none"){		
					$(this).parent().children(".ts").remove();
					$('<div class="ts" style="color:red;font-size:10px;">'+'*帐号输入不能为空'+'</div>').insertAfter($(this));
					for_tel_or_mail=false;
					return false;
				}
			else if((!(check_phone).test($(this).val()))&&(!(check_mail).test($(this).val()))){
						$(this).parent().children(".ts").remove();
						$('<div class="ts" style="color:red;font-size:10px;">'+'*请输入正确的邮箱或者手机'+'</div>').insertAfter($(this));
					for_tel_or_mail=false;
					return false;			
			}
			else if(check_mail.test($(this).val())){//如果输入的是邮箱
				$(this).parent().children(".ts").remove();				
				for_tel_or_mail=true;	
				for_yzm=true;	
				$(".for_msg_li").hide();	
			}
			else if(check_phone.test($(this).val())){//如果输入的是手机
				$(this).parent().children(".ts").remove();					
				for_tel_or_mail=true;
				$(".for_msg_li").show();	
			}
		});		   
	});
		
		$(".for_yzm_text").focus(function(){
			$(this).hide();
			$(this).next().show().focus();
			$(this).next().focusout(function(){
				if($(this).val()==""){	
					$(this).hide();
					$(this).prev().show();			
				}
				if($(this).prev().css("display")!="none"){
					$(this).parent() .children(".ts").remove();
					$('<div class="ts" style="font-size:12px;color:red;">'+'*验证码入不能为空'+'</div>').insertAfter($(this));
					for_yzm=false;
				}
				else{
				$(this).parent().children(".ts").remove();
				for_yzm=true;
			}
			})	
		})
		
	$(".for_msg_text").focus(function(){
		$(this).hide();
		$(this).next().show().focus().focusout(function(){
			if($(this).val()==""){
				$(this).hide();
				$(this).prev().show();	
			}
			if($(this).prev().css("display")!="none"){
				$(this).parent().children(".ts").remove();
				$('<div class="ts" style="font-size:12px;color:red;">'+'手机验证码输入不能为空'+'</div>').insertAfter($(this));
				for_msg=false;
				return false;
			}
			else{
				$(this).parent().children(".ts").remove();
				for_msg=true;
			}	
		});	
	})			
}
//天驰利网协议
function showAgreement(){
	var left=$(".left").offset().left+$(".left").outerWidth();
	var top=$(".ban_img").offset().top+$(".ban_img").outerHeight()/2;
	$(".xy_div").css({"position":"absolute","left":left}).css("background","#f2f2f2").css("top",top).show();
	$(".xy_div").children("span").click(function(){
		$(".xy_div").hide();	
	})
		
}
//忘记密码提交
function conForPwd(){
	if(!for_tel_or_mail){
			$(".for_tel_li").children(".ts").remove();
			$('<div class="ts" style="color:red;font-size:10px;">'+'*必须输入手机或者邮箱'+'</div>').insertAfter($(".for_tel_li").children("input").eq(1));
			return false;
		}
		if(!for_yzm){
			$(".for_yzm_li").children(".ts").remove();
			$('<div class="ts" style="color:red;font-size:10px;">'+'*验证码不能为空'+'</div>').insertAfter($(".for_yzm_li").children("input").eq(1));
			return false;	
		}
		if(!for_msg){
			$(".for_msg_li").children(".ts").remove();
			$('<div class="ts" style="color:red;font-size:10px;">'+'*手机验证码不能为空'+'</div>').insertAfter($(".for_msg_l").children("input").eq(1));
			return false;		
		}	
}
	
var pay_money=0;//记录支付金额
var check_pay_money=/^\d+$/;
var pay_type=0;//记录选择的支付方式
//充值页面方法
function showMoneyInput(){
		$(".div .div_mdle .right .change_password .change_password_ul .recharge_div ul .else_num").click( function(){
			$(this).parent().children(".checked").removeClass("checked");
			$(this).addClass("checked");
			$(this).children("input").attr("value","").focusout(function(){
				if(!check_pay_money.test($(this).val())){
					$(this).attr("value","其他金额（输入）");	
					pay_money=0;
				}
				else{
						pay_money=$(this).val();
						$("#pay_money_hidden").attr("value",$(this).val());
					}	
			});	
		})
}


//设置鼠标放到页面上的方法
	function hoverInput(){
		$(".div .div_mdle .right .change_password .change_password_ul .recharge_div .money_num_ul li").hover(function(){
				$(this).addClass("li_hover");
		},function(){
				$(this).removeClass("li_hover");
		})
		$(".div .div_mdle .right .change_password .change_password_ul .recharge_div .money_type_ul li").hover(function(){
				$(this).addClass("li_hover")
		},function(){
				$(this).removeClass("li_hover");
		})	
	}
		
//选择金钱函数
function chooseMoney(){
	for(var i=1;i<6;i++){
		$(".right .change_password .change_password_ul .recharge_div .money_num_ul li").eq(i).click(function(){
				$(this).parent().children("li").removeClass("checked");
				$(this).addClass("checked");
				pay_money=$(this).children("input").attr("data");
				$("#pay_money_hidden").attr("value",$(this).children("input").attr("data"));
		})	
	}	
}
//选择银行类别
function chooseBank(a){
	$(a).parent().parent().parent().prev().children("img").remove();
	$(a).parent().parent().parent().prev().children("input").hide().attr("value",$(a).attr("data"));
	$('<img src="images/'+$(a).attr("data")+'_bj.gif" />').insertBefore($(a).parent().parent().parent().prev().children("span"));
	$(a).parent().parent().parent().hide();
	$(".pay_btn").show();
	pay_type=$(a).attr("data");
	
}
//银行种类显示
function showBanksDiv(a){
	$(a).parent().next().show();
	$(a).parent().children("img").remove();
	$(a).parent().children("input").show();
	if($(".pay_btn").css("display")!="none"){
		$(".pay_btn").hide();
	}
}
//选择支付类别
function putFuntion(){
	for(var i=2;i<6;i++){
		$(".div .div_mdle .right .change_password .change_password_ul .recharge_div .money_type_ul li").eq(i).children("input").click(function(){
		$(this).parent().parent().children("li").removeClass("checked");
		$(this).parent().addClass("checked");
		$(".bank_divs").hide();
		pay_type=$(this).attr("data");	
		$("#pay_type_hidden").attr("value",$(this).attr("data"));
		$(".bank_id").attr("value",$(this).attr("data"));
		$(".pay_btn").show();	
		})	
	}
	$(".right .change_password .change_password_ul .recharge_div .money_type_ul li").eq(1).children("input").click(function(){
		$(this).parent().parent().children("li").removeClass("checked");
		$(this).parent().addClass("checked");
		$(".bank_divs").show();
		pay_type=$(this).attr("data");
		$("#pay_type_hidden").attr("value",$(this).attr("data"));
		$(".pay_btn").hide();		
		})		
}
//提交金钱函数
function payMoney(){
	if(!pay_money){
		alert("请选择金钱");
		return false;	
	}
	if(!pay_type){
		alert("请选择支付方式");
		return false;	
	}
	alert("success");
			
}
function putData(){
	if(!nick){
			$(".login_msg ul .nick").children(".ts").remove();
			$('<div class="ts" style="color:red;font-size:10px;">'+'*用户名最短3个字符最长不超过16个字符'+'</div>').insertAfter($(".div .div_mdle .left .login_div .login_msg ul .nick").children("input").eq(1));
			return false;
		}
	if(!mble_or_mail){
			$(".login_msg ul .mble_or_mail").children(".ts").remove();
			$('<div class="ts" style="color:red;font-size:10px;">'+'*请输入正确的邮箱或者手机'+'</div>').insertAfter($(".div .div_mdle .left .login_div .login_msg ul .mble_or_mail").children("input").eq(1));
			return false;
		}
	if(!passwd){
			$(".login_msg ul .passwd").children(".ts").remove();
			$('<div class="ts" style="color:red;font-size:10px;">'+'*用户名最短3个字符最长不超过16个字符'+'</div>').insertAfter($(".div .div_mdle .left .login_div .login_msg ul .passwd").children("input").eq(1));
			return false;
		}
	if(!con_passwd){
			$(".login_msg ul .con_passwd").children(".ts").remove();
			$('<div class="ts" style="color:red;font-size:10px;">'+'*用户名最短3个字符最长不超过16个字符'+'</div>').insertAfter($(".div .div_mdle .left .login_div .login_msg ul .con_passwd").children("input").eq(1));
			return false;
		}
	if(!yzm){
			$(".login_msg ul .register_yzm_li").children(".ts").remove();
			$('<div class="ts" style="color:red;font-size:10px;">'+'*验证码不能为空'+'</div>').insertAfter($(".div .div_mdle .left .login_div .login_msg ul .register_yzm_li").children("input").eq(1));
			return false;
		}
	if(!phone_yzm){
			$(".login_msg ul .phone_li").children(".ts").remove();
			$('<div class="ts" style="color:red;font-size:10px;">'+'*手机验证码不能为空'+'</div>').insertAfter($(".div .div_mdle .left .login_div .login_msg ul .phone_li").children("input").eq(2));
			return false;
		}
	if(!box){
			$(".login_msg ul .radio").children(".ts").remove();
			$('<div class="ts" style="color:red;font-size:10px;">'+'*必须勾选协议'+'</div>').insertAfter($(".div .div_mdle .left .login_div .login_msg ul .radio").children().eq(1));
			return false;
		}	
}
function loginUser(){
	if(!log_name){
		$(".login_msg ul .name_li").children(".ts").remove();	
		$('<div class="ts" style="color:red;font-size:10px;">'+'*用户名最短3个字符最长不超过16个字符'+'</div>').insertAfter($(".div .div_mdle .left .login_div .login_msg ul .name_li").children("input").eq(1));
		return false;
		}
	if(!log_passwd){
		$(".login_msg ul .password_li").children(".ts").remove();		
		$('<div class="ts" style="color:red;font-size:10px;">'+'*长度在6~18之间，只能包含字符、数字和下划线'+'</div>').insertAfter($(".div .div_mdle .left .login_div .login_msg ul .password_li").children("input").eq(1));
		return false;
		}
	if(!log_yzm){	
		$(".login_msg ul .confirm_li").children(".ts").remove();
		$('<div class="ts" style="color:red;font-size:10px;">'+'*验证码不能为空'+'</div>').insertAfter($(".div .div_mdle .left .login_div .login_msg ul .confirm_li").children("input").eq(1));
		return false;
		}
	
}
/*确认修改密码*/
function conChangePwd(){
		if(!che_pwd){
			$(".che_ul .new_pwd").children(".ts").remove();
			$('<div class="ts" style="color:red;font-size:10px;">'+'*新密码以字母开头，长度在6~18之间，只能包含字符、数和下划线'+'</div>').insertAfter($(".che_ul .new_pwd").children("input").eq(1));
			return false;
		}
		if(!con_che_pwd){
			$(".che_ul .con_new_pwd").children(".ts").remove();
			$('<div class="ts" style="color:red;font-size:10px;">'+'*新密码以字母开头，长度在6~18之间，只能包含字符、数和下划线'+'</div>').insertAfter($(".che_ul .con_new_pwd").children("input").eq(1));
			return false;	
		}
		if(!che_yzm){
			$(".che_ul .che_yzm").children(".ts").remove();
			$('<div class="ts" style="color:red;font-size:10px;">'+'*新密码以字母开头，长度在6~18之间，只能包含字符、数和下划线'+'</div>').insertAfter($(".che_ul .che_yzm").children("input").eq(1));
			return false;		
		}
	}

function checkBox(){
		if($("#c_box").attr("checked")=="checked"){
		if($(".div .div_mdle .left .login_div .login_msg ul .radio").children(".ts").length>=1){
				$(".div .div_mdle .left .login_div .login_msg ul .radio").children(".ts").remove();
				
		}
		box=true;
	}
	else {
		if($(".div .div_mdle .left .login_div .login_msg ul .radio").children(".ts").length>=1){
			$(this).parent().children(".ts").remove();
			$('<div class="ts" style="color:red;font-size:10px;">'+'*输入不能为空'+'</div>').insertAfter($("#c_box").next());					
		}else{
			$('<div class="ts" style="color:red;font-size:10px;">'+'*输入不能为空'+'</div>').insertAfter($("#c_box").next());
							
		}
		box=false;
	}
}
/*注册切换*/
function registerUserChange(a){
		$(a).parent().parent().parent().prev().children("li").eq(0).removeClass("show_li");
		$(a).parent().parent().parent().prev().children("li").eq(1).addClass("show_li");
		$(a).parent().parent().parent().children("ul").eq(0).removeClass("show_ul");
		$(a).parent().parent().parent().children("ul").eq(1).addClass("show_ul");
	}
function showAgr(){
	window.open("http://passport.baidu.com/static/passpc-account/html/protocal.html","","","");	
}


/*function showDiv(a){
	$(a).parent().parent().children("li").removeClass("choice");
	$(a).parent().addClass("choice");
	var i_index=$(a).parent().parent().children(".choice").index()+1;
	$(".right").find("div").removeClass("show_div");
	$(".div"+i_index).addClass("show_div");	
}*/


function showDate(){
	var date=new Date();
	var now_day=date.getDate();
	var now_month=date.getMonth()+1;
	var now_month=date.getFullYear()+1990;
		
}
var days=new Array();//存贮应该显示的天数
//var now_year=date.getFullYear();//记录年份
/*function initDate(){
	days=[];
	var date=new Date();
	var now_month=date.getMonth();
	var now_year=date.getFullYear();
	$("#date_div ul li .month_span").html(now_month+1);
	$("#date_div ul li .year_span").html(now_year);
	addPrevDays();
	addNowDays();
	addNextDays();
	$("#date_div").show();
	if($("#date_div_spans").children("span").length){
		console.log($("#date_div_spans").children("span").length);
		$("#date_div_spans").children("span").remove();		
	};	
	for(var i=0;i<days.length;i++){
		$("#date_div_spans").append(days[i]);
		}		
}*/
function addPrevDays(){
	var date=new Date();
	var now_year=date.getFullYear();//记录年份
	date.setDate(1);
	var start_day=parseInt(date.getDay());//得到今天是周几，根据这个值都到上一个月需要有几天在这个div里面
	var now_month=date.getMonth();//得到这个月份
	//往前补几天
	if(now_month==0)//如果本月是1月，设置上一个月为12月
		{
			date.setMonth(11);
		}
	else{
		date.setMonth(now_month-1);//然后在得到上个月份	
	}
	var prev_month=date.getMonth();
	alert("前一个月是: "+(parseInt(prev_month)+1));
	alert(start_day);
	//如果这个月是4，6，9，11
	if(prev_month==3||prev_month==5||prev_month==8||prev_month==10)
		{
			for(var i=start_day;i>=1;i--)
			{
				days.push('<span class="date prev" onclick="choiceSpan();">'+(30-i+1)+'</span>');
				//alert	
			}
		}
	//如果这个月是1,3,5,7,8,10,12
	else if(prev_month==0||prev_month==2||prev_month==4||prev_month==6||prev_month==7||prev_month==9||prev_month==11)
			{
				for(var i=start_day;i>=1;i--)
					{
						days.push('<span class="date prev" onclick="choiceSpan();">'+(31-i+1)+'</span>');	
					}	
			}
	//如果是2月
	else if(prev_month==1){
		//如果是闰年，有29天
		if((now_year%400==0)||((now_year%4==0)&&(now_year%100!=0))){
			for(var i=start_day;i>=1;i--){
				days.push('<span class="date prev" onclick="choiceSpan();">'+(29-i+1)+'</span>');	
			}		
		}
		//如果是平年
		else{
			for(var i=start_day;i>=1;i--){
				days.push('<span class="date prev" onclick="choiceSpan();">'+(28-i+1)+'</span>');	
			}		
		}	
	}	
}
function addNextDays(){
	//alert("addnextdays");
	var date=new Date();
	var now_year=date.getFullYear();//记录年份
	var start_day;//得到今天是周几，根据这个值都到上一个月需要有几天在这个div里面
	var now_month=date.getMonth();//得到这个月份
	if(now_month==3||now_month==5||now_month==8||now_month==10){
		
			date.setDate(30);	
	}
	//如果这个月是1,3,5,7,8,10,12
	else if(now_month==0||now_month==2||now_month==4||now_month==6||now_month==7||now_month==9||now_month==11){
			date.setDate(31);	
		}
	//如果是2月
	else if(now_month==1){
		//如果是闰年，有29天
		if((now_year%400==0)||((now_year%4==0)&&(now_year%100!=0))){
			date.setDate(29);			
		}
		//如果是平年
		else{
			date.setDate(28);		
		}	
	}
	start_day=date.getDay();
	//根据是星期几往后补天数	
	for(var i=1;i<6-start_day+1;i++){
			days.push('<span class="date next" onclick="choiceSpan();">'+i+'</span>');	
		}
}
function addNowDays(){
	var date=new Date();
	var now_year=date.getFullYear();
	var now_month=date.getMonth();
	//如果这个月是4，6，9，11
	if(now_month==3||now_month==5||now_month==8||now_month==10){
		for(var i=1;i<30+1;i++){
			days.push('<span class="date now" onclick="choiceSpan();">'+i+'</span>');	
		}
	}
	//如果这个月是1,3,5,7,8,10,12
	else if(now_month==0||now_month==2||now_month==4||now_month==6||now_month==7||now_month==9||now_month==11){
			for(var i=1;i<31+1;i++){
				days.push('<span class="date now" onclick="choiceSpan();">'+i+'</span>');	
			}	
		}
	//如果是2月
	else if(now_month==1){
		//如果是闰年，有29天
		if((now_year%400==0)||((now_year%4==0)&&(now_year%100!=0))){
			for(var i=1;i<29+1;i++){
				days.push('<span class="date now" onclick="choiceSpan();">'+i+'</span>');	
			}		
		}
		//如果是平年
		else{
			for(var i=1;i<28+1;i++){
				days.push('<span class="date now" onclick="choiceSpan();">'+i+'</span>');	
			}		
		}	
	}	
}





//根据获取月份补充天数
function addPrevDays1(){
	//var now_month=$("#date_div .year_month .prev_month").html();
	//var date=new Date();
	var m_val=$("#date_div ul li .month_span").html();
	var y_val=$("#date_div ul li .year_span").html();
	var date=new Date(Date.UTC(y_val,m_val-1));
	var now_month=date.getMonth();
	var now_year=date.getFullYear();
	date.setDate(1);
	var start_day=date.getDay();
	//var now_year=$("#date_div ul li .year_span").val();
	if(now_month==1){
		date.setMonth(11);	
	}
	else{
		date.setMonth(now_month-2);	
	}
	var prev_month=date.getMonth();
	//往前补几天
	if(now_month==0)//如果本月是1月，设置上一个月为12月
		{
			//alert(1);
			date.setMonth(11);
		}
	else{
		//alert(2);
		date.setMonth(now_month-1);//然后在得到上个月份
		
	}
	var prev_month=date.getMonth();
	//alert("前一个月是: "+(parseInt(prev_month)+1));
	//如果这个月是4，6，9，11
	if(prev_month==3||prev_month==5||prev_month==8||prev_month==10)
		{
			for(var i=start_day;i>=1;i--)
			{
				days.push('<span class="date prev" onclick="choiceSpan();">'+(30-i+1)+'</span>');	
			}
		}
	//如果这个月是1,3,5,7,8,10,12
	else if(prev_month==0||prev_month==2||prev_month==4||prev_month==6||prev_month==7||prev_month==9||prev_month==11)
			{
				for(var i=start_day;i>=1;i--)
					{
						days.push('<span class="date prev" onclick="choiceSpan();">'+(31-i+1)+'</span>');	
					}	
			}
	//如果是2月
	else if(prev_month==1){
		//如果是闰年，有29天
		if((now_year%400==0)||((now_year%4==0)&&(now_year%100!=0))){
			for(var i=start_day;i>=1;i--){
				days.push('<span class="date prev" onclick="choiceSpan();">'+(29-i+1)+'</span>');	
			}		
		}
		//如果是平年
		else{
			for(var i=start_day;i>=1;i--){
				days.push('<span class="date prev" onclick="choiceSpan();">'+(28-i+1)+'</span>');	
			}		
		}	
	}				
}

//根据月份得到现在天数
function addNowDays1(){
	var m_val=$("#date_div ul li .month_span").html();
	var y_val=$("#date_div ul li .year_span").html();
	var date=new Date(Date.UTC(y_val,m_val-1));
	var now_month=date.getMonth();
	var now_year=date.getFullYear();
	//如果这个月是4，6，9，11
	if(now_month==3||now_month==5||now_month==8||now_month==10){
		for(var i=1;i<30+1;i++){
			days.push('<span class="date now" onclick="choiceSpan();">'+i+'</span>');	
		}
	}
	//如果这个月是1,3,5,7,8,10,12
	else if(now_month==0||now_month==2||now_month==4||now_month==6||now_month==7||now_month==9||now_month==11){
			for(var i=1;i<31+1;i++){
				days.push('<span class="date now" onclick="choiceSpan();">'+i+'</span>');	
			}	
		}
	//如果是2月
	else if(now_month==1){
		//如果是闰年，有29天
		if((now_year%400==0)||((now_year%4==0)&&(now_year%100!=0))){
			for(var i=1;i<29+1;i++){
				days.push('<span class="date now" onclick="choiceSpan();">'+i+'</span>');	
			}		
		}
		//如果是平年
		else{
			for(var i=1;i<28+1;i++){
				days.push('<span class="date now" onclick="choiceSpan();">'+i+'</span>');	
			}		
		}	
	}	
}
//根据获取月份补充后面的天数
function addNextDays1(){
	var m_val=$("#date_div ul li .month_span").html();
	var y_val=$("#date_div ul li .year_span").html();
	var date=new Date(Date.UTC(y_val,m_val-1));
	var now_month=date.getMonth();
	var now_year=date.getFullYear();
	if(now_month==3||now_month==5||now_month==8||now_month==10){
		
			date.setDate(30);	
	}
	//如果这个月是1,3,5,7,8,10,12
	else if(now_month==0||now_month==2||now_month==4||now_month==6||now_month==7||now_month==9||now_month==11){
			date.setDate(31);	
		}
	//如果是2月
	else if(now_month==1){
		//如果是闰年，有29天
		if((now_year%400==0)||((now_year%4==0)&&(now_year%100!=0))){
			date.setDate(29);			
		}
		//如果是平年
		else{
			date.setDate(28);		
		}	
	}
	start_day=date.getDay();
	//根据是星期几往后补天数	
	for(var i=1;i<6-start_day+1;i++){
			days.push('<span class="date next" onclick="choiceSpan();">'+i+'</span>');	
		}			
}
function initPrevDays1(){
	days=[];
	monthPrevChange();
	
	addPrevDays1();
	addNowDays1();
	addNextDays1();
	$("#date_div_spans").children("span").remove();	
	for(var i=0;i<days.length;i++){
		$("#date_div_spans").append(days[i]);
		}	
}
//前翻
function monthPrevChange(){
	var m_val=parseInt($("#date_div ul li .month_span").html());//获取月份
	if(m_val==1){//如果为1月份，上一个月为上一年的12月
		var y_val=parseInt($("#date_div ul li .year_span").html());
		$("#date_div ul li .month_span").html("12");
		$("#date_div ul li .year_span").html(y_val-1);	
	}
	else{
		var x=$("#date_div ul li .month_span").html()-1;
		$("#date_div ul li .month_span").html(x);	
	}		
}
//下翻
function monthNextChange(){
	var m_val=parseInt($("#date_div ul li .month_span").html());//获取月份
	if(m_val==12){
		$("#date_div ul li .month_span").html("1");
		var y_val=parseInt($("#date_div ul li .year_span").html());
		$("#date_div ul li .year_span").html(y_val+1);	
	}
	else{
		$("#date_div ul li .month_span").html(m_val+1);
	}
	
}

function yearPrevChange(){
	var y_val=parseInt($("#date_div ul li .year_span").html());
	$("#date_div ul li .year_span").html(y_val-1);		
}

function yearNextChange(){
	var y_val=parseInt($("#date_div ul li .year_span").html());
	$("#date_div ul li .year_span").html(y_val+1);	
}

function initNextDays1(){
	days=[];
	monthNextChange();	
	addPrevDays1();
	addNowDays1();
	addNextDays1();
	$("#date_div_spans").children("span").remove();	
	for(var i=0;i<days.length;i++){
		$("#date_div_spans").append(days[i]);
		}	
}

function initNextDays2(){
	days=[];
	yearNextChange();	
	addPrevDays1();
	addNowDays1();
	addNextDays1();
	$("#date_div_spans").children("span").remove();	
	for(var i=0;i<days.length;i++){
		$("#date_div_spans").append(days[i]);
		}	
}

function initPrevDays2(){
	days=[];
	yearPrevChange();
	
	addPrevDays1();
	addNowDays1();
	addNextDays1();
	$("#date_div_spans").children("span").remove();	
	for(var i=0;i<days.length;i++){
		$("#date_div_spans").append(days[i]);
		}	
}


function choiceSpan(){
	alert($(this).nodeType);
	alert($(this).html());
	$(".start_time_input").attr("value",$(this).html())
}

function deleteValue(){
	$(".register_ul").find(".hide").hide().attr("value","");
	$(".register_ul").find(".hide").prev().show();
}