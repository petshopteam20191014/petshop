$(function(){
	console.log(3334)
	$("#uname").blur(function(){   //当用户名输入框失去焦点时
		var uname=$(this).val();
		$("#names").empty();
		//用户名非空判断
		if(uname==null||uname==""){
			$("#uname").after("<span id='names' style='color:red;font-size:5px'>用户不为空</span>");
		}else{
			// 用户名重复判断
			$.ajax({
				type:"post",
				url:"selectUser",
				data:{"uname":uname},
				dataType:"json",
				success:function(data){
//					console.log(data);
					if(data.result=="exist"){
						$("#uname").after("<span id='names' style='color:red;font-size:5px'>用户名已存在</span>");
					}else if(data.result=="none"){
						$("#uname").after("<span id='names' style='color:blue;font-size:5px'>用户名可用</span>");
					}
	              
					
				}
				
			});
		}
		
	});
	
	//密码非空判断
	$("#password").blur(function(){   //当密码输入框失去焦点时
		var password=$(this).val();
		$("#passwords").empty();
		if(password==null||password==""){
			$("#password").parent()
			$("#password").after("<span id='passwords' style='color:red;font-size:5px'>密码不为空</span>");
		}
	});

	//注册按钮绑定单击事件，添加用户数据
	$("#regBtn").click(function(){
		var uname=$("#uname").val();
		var password=$("#password").val();
		$.ajax({
			type:"post",
			url:"insertUser",
			data:{"uname":uname,"password":password},
			dataType:"json",
			success:function(data){
				console.log(data);
                alert("注册成功！");
				location.href="login.html";
			}
			
		})
	});
	
	
	
	
	
})