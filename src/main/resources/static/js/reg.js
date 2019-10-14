$(function(){
	//用户名非空判断
	$("#uname").blur(function(){   //当用户名输入框失去焦点时
		$("#names").empty();
		var uname=$(this).val();
		if(uname==null||uname==""){
			$("#uname").after("<span id='names' style='color:red'>用户名不能为空</span>");
		}
	});
	
	//密码非空判断
	$("#password").blur(function(){   //当用户名输入框失去焦点时
		$("#passwords").empty();
		var password=$(this).val();
		if(password==null||password==""){
			$("#password").after("<span id='passwords' style='color:red'>密码不能为空</span>");
		}
	});
	
	// 用户名重复判断
	
	
	//注册按钮绑定单击事件，添加用户数据
	$("#regBtn").click(function(){
		$.ajax({
			type:"post",
			url:"insertUser",
			data:{"uname":uname,"password":password},
			dataType:"json",
			success:function(data){
//				console.log(data);

				
			}
			
		})
		
	});
	
	
	
	
	
})