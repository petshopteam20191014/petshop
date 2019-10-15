$(function(){
	
	$("#uname").blur(function(){  
		var uname=$(this).val();
		$("#names").empty();
		//用户名非空判断
		if(uname==null||uname==""||uname.indexOf(" ")!=-1){
			$("#uname").after("<span id='names' style='color:red;font-size:5px'>用户不为空</span>");
			$('#regBtn').attr('disabled',"true");
		}else{
			
			// 用户名重复判断
			$.ajax({
				type:"post",
				url:"selectUserByName",
				data:{"uname":uname},
				dataType:"json",
				success:function(data){
//					console.log(data);
					if(data.result=="exist"){
						$("#uname").after("<span id='names' style='color:red;font-size:5px'>用户已存在</span>");
						$('#regBtn').attr('disabled',"true");
					}else if(data.result=="none"){
						$("#uname").after("<span id='names' style='color:blue;font-size:5px'>用户名可用</span>");
						$('#regBtn').removeAttr('disabled');
					}
	              
					
				}
				
			});
		}
		
	});
	
	//密码非空判断
	$("#password").blur(function(){   
		var password=$(this).val();
		$("#passwords").empty();
		if(password==null||password==""||password.indexOf(" ")!=-1){
			$("#password").after("<span id='passwords' style='color:red;font-size:5px'>密码不为空</span>");
			$('#regBtn').attr('disabled',"true");
		}
	});

	//注册按钮绑定单击事件，添加用户数据
	$("#regBtn").click(function(){
		var uname=$("#uname").val();
		var password=$("#password").val();
		$.ajax({
			type:"post",
			url:"register",
			data:{"uname":uname,"password":password},
			dataType:"json",
			success:function(data){
                alert(data.result);
				window.location.href="login.html";
			}
			
		})
	});
	
	
	
	
	
})